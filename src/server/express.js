const path = require('path');
const compression = require('compression');
const webpack = require('webpack');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

const proxy = require('express-http-proxy');
const history = require('connect-history-api-fallback');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/webpack.dev.js');

const handleProxyRequest = require('./proxy');
const user = require('./user');

const env = process.env.NODE_ENV;

try {
  dotenv.config();
  app.use(require('body-parser').json());
  app.use(require('cookie-parser')());

  app.use('/api', (req, res, next) =>
    proxy(
      process.env.SETTINGS_API_DOMAIN,
      handleProxyRequest(process.env.SETTINGS_API_DOMAIN, req)
    )(req, res, next)
  );

  app.use('/auth', (req, res, next) =>
    proxy(process.env.SETTINGS_API_DOMAIN, user(process.env.SETTINGS_API_DOMAIN, req))(
      req,
      res,
      next
    )
  );

  if (env !== 'production') {
    const compiler = webpack(webpackConfig(env));
    const devMiddleware = WebpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig(env).output.publicPath,
    });
    const hotMiddleware = WebpackHotMiddleware(compiler);

    app.use(history());
    app.use(devMiddleware);
    app.use(hotMiddleware);
  } else {
    const publicPath = '/';
    const outputPath = path.resolve(process.cwd(), 'build');

    app.use(compression());
    app.use(publicPath, express.static(outputPath));
    app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
  }

  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`);
  });
} catch (e) {
  console.error(e);
}
