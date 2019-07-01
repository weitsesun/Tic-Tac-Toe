module.exports = {
  entry: './client/index.jsx',
  output: {path: __dirname + '/client/dist/',
          filename: 'bundle.js'},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};