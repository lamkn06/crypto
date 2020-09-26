const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: 'development',

    entry: {
      main: path.join(__dirname, '../src/index.tsx'),
    },

    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.js', '.ts', '.tsx'],
    },

    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].[chunkhash].js',
      publicPath: '/',
    },

    target: 'web',

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: 'babel-loader',
          exclude: ['/node_modules/', '/src/_icons'],
        },
        {
          test: /\.(sass|scss|css)$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        },
        {
          test: /\.(pdf|txt|xml|eot|ttf|woff|woff2|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        },
        {
          test: /\.svg$/,
          use: 'svg-url-loader',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        title: 'Digi Flow',
        favicon: path.join(__dirname, '../src/assets/images/favicon.png'),
        template: path.join(__dirname, '../src/index.ejs'),
        env: JSON.stringify(env),
      }),
    ],
  };
};
