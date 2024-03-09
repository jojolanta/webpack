const path = require("path");
const loader = require("sass-loader");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
  module: {
    rules: [{
    test: /\.scss$/,
    use: [
    "style-loader",
    "css-loader",
    "sass-loader"
    ]
    }]
    }
};
