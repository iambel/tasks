const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // define caminho de entrada
  output: {
    // define caminho de saida
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, "utils/index.html" }) ],
};
