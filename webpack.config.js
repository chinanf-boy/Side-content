var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './side-content.js',
  output: {
    filename: 'side-content.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
       rules: [{
           test: /\.css$/,
           use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: 'css-loader'
            })
       },
       {
         test: /\.js$/,
         exclude: /(node_modules)/,
         use: [{
           loader: 'babel-loader',
           options: {
             presets: [['es2015', {modules: false}]],
             plugins: ['syntax-dynamic-import']
           }
          }]
      }
     ]
   },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    ]
};
