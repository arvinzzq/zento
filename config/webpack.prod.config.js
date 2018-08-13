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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
