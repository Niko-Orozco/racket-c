const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const { prependWebpackPlugin } = require("@rescripts/utilities");
const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
 
module.exports = function override(config, env) {
  return prependWebpackPlugin(new MonacoWebpackPlugin({
    // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    languages: ['c', 'scheme']
  }), config);
}