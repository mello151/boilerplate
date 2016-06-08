var path = require("path");
var MODULES_DIR = /(bower_components|node_modules)/;
module.exports = {
  module: {
    loaders: [
        { test: /\.tsx?$/, exclude: MODULES_DIR, loader: "ts" },
        { test: /\.css$/, exclude: MODULES_DIR, loader: "css"},
        { test: /\.html$/, exclude: MODULES_DIR, loader: "html"}
    ],
  },
  entry: { app: "./src/index.ts" },
  output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/src/",
      filename: "bundle.js"
  },
  ts: {
    configFileName: "tsconfig.json"
  },
  resolve: {
    extensions: [
      "",
      ".js",
      ".ts",
      ".tsx",
      ".css",
      ".html"
    ],
  }
};