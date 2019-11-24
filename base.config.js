const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.default = {
  entry: {
    main: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      path.resolve(__dirname, 'src', 'main.tsx')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          'eslint-loader?fix=true'
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.png$|\.svg$|\.gif$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.ico$/,
        use: 'file-loader'
      }
    ]
  },
  node: false,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['main'],
      title: 'Chatbox Web Client',
      filename: 'index.html',
      chunksSortMode: 'none'
    }),
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      async: false
    })
  ]
}
