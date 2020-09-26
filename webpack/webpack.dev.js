const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = (env) => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
      publicPath: `http://localhost:9000/`,
      pathinfo: false,
    },

    devServer: {
      host: '0.0.0.0',
      port: 9000,
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      watchContentBase: true,
    },
  });
};
