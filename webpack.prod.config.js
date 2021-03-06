const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",

  entry: [
    "babel-polyfill",
    "./src/index"
  ],

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss?$/,
        loader: "style!css!sass",
        include: path.join(__dirname, "src", "styles")
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader?name=/img/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file"
      }
    ]
  }
};
