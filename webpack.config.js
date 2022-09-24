const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', "@babel/preset-react"],
          plugins: [
            [
              "@babel/plugin-transform-react-jsx",
              {
                "runtime": "automatic"
              }
            ]
          ]}
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: "img",
          esModule: false
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"],
    alias: {
      images: path.resolve(__dirname, 'dist/img/'),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
