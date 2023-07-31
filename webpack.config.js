const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css"], // Add '.css' to the extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: ["/node_modules/"],
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[local]--[hash:base64:4]" },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: ["/node_modules/"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Add this line
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Specify the path to your HTML template
    }),
  ],
};
