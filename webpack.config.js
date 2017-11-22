const path = require('path')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/scripts/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}