const webpack = require('webpack');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
 

module.exports = (env, args) => {
    const isProductionMode = (args.mode === 'production')

    return {
      entry: "./index.js",
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: isProductionMode
          ? "prod-[name].[contenthash].js"
          : "dev-[name].[hash].js",
      },
      optimization: {
        minimize: false,
      },
      plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new HtmlWebpackPlugin({
          template: "index.html",
        }),
        new WasmPackPlugin({
          crateDirectory: path.resolve(__dirname, "."),
        }),
        new webpack.ProvidePlugin({
          TextDecoder: ["text-encoding", "TextDecoder"],
          TextEncoder: ["text-encoding", "TextEncoder"],
        }),
      ],
    };
}