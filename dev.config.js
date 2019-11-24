const merge = require('webpack-merge')
const base = require('./base.config.js').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const extractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    hmr: true
  }
}

exports.default = merge.smart(base, {
  output: {
    publicPath: '/'
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: {
      index: '/'
    },
    publicPath: '/',
    overlay: true,
    watchOptions: {
      ignored: /node_modules|static/
    }
  },
  watchOptions: {
    ignored: /node_modules|static/
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [extractLoader, 'css-loader']
      },
      {
        test: /\.sass$/,
        use: [extractLoader, 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.scss$/,
        use: [extractLoader, 'css-loader', 'sass-loader']
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map'
})
