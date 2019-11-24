const merge = require('webpack-merge')
const base = require('./base.config.js').default
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

exports.default = merge.smart(base, {
  output: {
    publicPath: '/'
  },
  mode: 'production',
  plugins: [new OptimizeCSSPlugin()]
})
