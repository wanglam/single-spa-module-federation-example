const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: {
    index: "./src/index",
  },

  mode: "development",

  output: {
    publicPath: "http://localhost:3000/",
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
          presets: [require.resolve("@babel/preset-typescript")],
        },
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "main",
      library: { type: "var", name: "main" },
      filename: "remoteEntry.js",
      remotes: {
        "sub-app1": "app1",
        "sub-app2": "app2",
      },
      exposes: {},
      shared: [],
    }),
    new HTMLWebpackPlugin(),
  ],
};
