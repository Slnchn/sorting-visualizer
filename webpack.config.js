const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.jsx', './src/styles/index.scss'],
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
    },
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      { test: /\.(sc|sa|c)ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
  devServer: {
    port: 3000,
  },
};
