"use strict";

import nib from 'nib';
import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './app/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/server/public', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'app'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.styl$/, loaders: ['style-loader', 'css-loader', 'stylus-loader']},
      {test: /\.json$/, loader: "json-loader"},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  stylus: {
    use: [nib()]
  }
};
