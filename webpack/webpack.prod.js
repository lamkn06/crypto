const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
  return merge(common('production'), {
    mode: 'production',
    devtool: '',
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },

    plugins: [
      new Dotenv(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        title: 'Cryton',

        template: path.join(__dirname, '../src/index.ejs'),
        env: 'production',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],
  });
};
