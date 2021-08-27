const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, './public/js/index.js'),
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node-modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }] 
  },
	optimization: {
	    minimize: true,
	    minimizer: [new TerserPlugin()],
  }
};