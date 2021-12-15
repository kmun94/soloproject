const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    src: "/client/index.js",
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    proxy: {
      "/todos": "http://localhost:3000/",
      "/test": "http://localhost:3000/",
    },
  },
};
