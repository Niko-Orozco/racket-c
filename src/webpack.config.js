const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  plugins: [
    new MonacoWebpackPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  }
};