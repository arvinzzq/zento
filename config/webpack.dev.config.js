const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  entry: {
    bundle: './docs/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: 'docs/dist/',
    filename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './docs/',
    compress: true,
    progress: true,
    port: 2345,
    open: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: false,
      version: false,
      warnings: true,
      colors: true
    }
  }
});
