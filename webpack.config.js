const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist',
        }),
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Project',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
    }),
  ]
}
