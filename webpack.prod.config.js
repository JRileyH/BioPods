const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'src/assets',to:'assets'}
  ]), 
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};