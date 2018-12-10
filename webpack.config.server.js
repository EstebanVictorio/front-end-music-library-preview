const path = require('path');
const webpack = require('webpack');

let config = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    server: path.resolve(__dirname, 'Server') + '/index.js'
  },
  resolve: {
    extensions: ['.js','.jsx'],
    alias: {
      Container: path.resolve(__dirname,'Component') + '/Container',
      Presentational: path.resolve(__dirname,'Component') + '/Presentational',
      Settings: path.resolve(__dirname,'Settings'),
      Store: path.resolve(__dirname,'Store'),
      Server: path.resolve(__dirname,'Server'),
      Controller: path.resolve(__dirname,'Controller'),
      Utils: path.resolve(__dirname,'Utils'),
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
              require('babel-plugin-transform-runtime'),
              require('babel-plugin-transform-object-rest-spread')
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader',{loader:'css-loader'}]
      }
    ]
  }

};

module.exports = config;
