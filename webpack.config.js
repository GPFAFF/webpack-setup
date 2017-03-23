const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
      app: './src/app.js',
      contact: './src/contact.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only",
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Project',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      excludeChunks: ['contact'],
      template: './src/index.ejs'
    }),
    new HtmlWebPackPlugin({
      title: 'Contact',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      filename: 'contact.html',
      excludeChunks: ['app'],
      template: './src/contact.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
    }),
  ]
}
