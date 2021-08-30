const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: {
    index: "./src/index",
  },

  mode: "development",

  output: {
    publicPath: "http://localhost:3002/",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-typescript"),
          ],
        },
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./App": "./src/index",
      },
      shared: ["react", "react-dom", "single-spa-react"],
    }),
  ],
};
