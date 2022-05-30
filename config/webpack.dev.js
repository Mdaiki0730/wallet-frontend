const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: "/",
  },
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
})
