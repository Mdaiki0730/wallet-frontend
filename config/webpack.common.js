const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),
    new ESLintPlugin({
      extensions: [ '.ts', '.js', '.jsx' ],
    }),
    new Dotenv({
      path: path.resolve(__dirname, `../.env`),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "Assets": path.resolve(__dirname, "../src/assets"),
      "Components": path.resolve(__dirname, "../src/components"),
      "Constants": path.resolve(__dirname, "../src/constants"),
      "Router": path.resolve(__dirname, "../src/router"),
      "Pages": path.resolve(__dirname, "../src/pages"),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
}
