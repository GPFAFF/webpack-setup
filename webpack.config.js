const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
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
      filename: 'main.scss',
      disabled: false,
      allChunks: true
    }),
  ]
}
