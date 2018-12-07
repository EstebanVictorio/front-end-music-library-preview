const path = require('path');
const webpack = require('webpack');
const HWP = require('html-webpack-plugin');

let config = {
  mode: 'development',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    client: path.resolve(__dirname, 'Client') + '/index.jsx'
  },
  plugins: [
    new HWP({
      template: "index.ejs",
      inject: "body",
      filename: "../index.html"
    })
  ],
  resolve: {
    extensions: ['.js','.jsx'],
    alias: {
      Container: path.resolve(__dirname,'Component') + '/Container',
      Presentational: path.resolve(__dirname,'Component') + '/Presentational',
      Settings: path.resolve(__dirname,'Settings'),
      Store: path.resolve(__dirname,'Store'),
    }
  },
  output: {
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env','babel-preset-react'],
            plugins: [
              require('babel-plugin-transform-runtime')
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }

};

module.exports = config;
