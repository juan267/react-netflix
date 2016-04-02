const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/BrowserEntry.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'] // order to look extensions for file imports
  },
  stats: {
    colors: true,
    reasons: true, // verborse error message
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader' // everything that mathces the regex is goign to run throght the loaders
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
