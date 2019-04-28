let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: './assets/js/index.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: './'
   },
   module: {
      rules: [
         {
            use: ExtractTextPlugin.extract({
               use: 'css-loader'
            }),
            test: /\.css$/
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: 'assets/index.html',
      }),
      new ExtractTextPlugin('css/style.css'),
   ],
}