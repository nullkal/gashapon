'use strict';

const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

const PRODUCTION = process.env.NODE_ENV === 'production';

const SRC_PATH  = __dirname;
const DEST_PATH = path.resolve(__dirname, '../public/assets/');

const BASE_PATH = {
  'development': 'http://localhost:8080/assets/',
  'production': '/assets/'
};

module.exports = {
  context: SRC_PATH,
  entry: {
    'gashapon': [ './scripts/gashapon.js', './styles/gashapon.css' ]
  },
  output: {
    path: DEST_PATH,
    publicPath: BASE_PATH[PRODUCTION ? 'production' : 'development'],
    filename: PRODUCTION ? '[name]-[hash].js' : '[name].js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      './images',
      './scripts',
      './styles'
    ],
    extensions: [ '.js', '.jsx' ]
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: PRODUCTION ? 'images/[name]-[hash].[ext]' : 'images/[name].[ext]'
            }
          },
          {
            loader: 'img-loader',
            options: {
              progressive: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: PRODUCTION ? 'eval' : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: DEST_PATH,
    proxy: {
      '**': 'http://web:3000'
    },
    stats: { colors: true }
  }
};
