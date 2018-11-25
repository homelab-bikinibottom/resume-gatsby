const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './docs',
    historyApiFallback: {
      index: 'index.html'
    },
    host: '0.0.0.0',
    port: 8080
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.(spec|test)\.js$).*\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/template.html'
    })
  ]
}