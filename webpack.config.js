module.exports = {
     entry: './src/app.js',
     output: {
         path: __dirname+'/dist',
         filename: 'app.bundle.js'
     },
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['es2015','babili']
                    }
                }
            }
        ]
    },
    devtool: "source-map"
 };

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
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
  },
  devServer: {
    contentBase: "./",
    hot: true
  },
  devtool: "source-map"
};