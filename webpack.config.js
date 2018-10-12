var path = require('path')
var webpack = require('webpack')

var constants = require('./config/const')
var { apiPrefix } = constants

module.exports={
  mode: 'development',
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'script.js'
  },
  devtool: 'source-map-inline',
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(scss|sass)$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options: {
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer:{
    open: true,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    contentBase: path.join(__dirname, './public'),
    host: 'localhost',
    proxy: {
      [apiPrefix]: 'http://localhost:3000',
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  resolve:{
    alias: {
      //'@src'
    }
  }
}
