const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  entry: {
    bundle: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'App.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'react'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
