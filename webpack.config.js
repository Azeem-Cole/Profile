const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx", // Replace 'index.tsx' with your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.jsx",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".module.css"], // Add '.css' to the extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // Enable CSS modules
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
