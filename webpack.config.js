const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/index.jsx'),
  watch: true,
  output: {
    path: __dirname + 'dist',
    publicPath: 'client/dist/',
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'client/app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: ['babel-loader'],
    }]
  }
};