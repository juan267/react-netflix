const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
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
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader' // everything that mathces the regex is goign to run throght the loaders
      }
    ]
  }
}
