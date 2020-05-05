const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    homepage: "./webpack/js/homepage.js",
    about: "./webpack/js/about.js",
    contact: "./webpack/js/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "./src/assets/scripts/")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};