const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: './src/index.js', // Main entry file
  output: {
    filename: 'main.js', // Output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Cleans the output directory before each build
  },
  devServer: {
    static: './dist', // Serve files from the dist folder
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Handles CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Handles image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use your custom HTML as a template
    }),
  ],
};
