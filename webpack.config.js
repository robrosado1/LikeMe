const path = require('path');
const webpack = require("webpack");

var plugins = [];
var devPlugins = [];

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
  context: __dirname,
  entry: './frontend/like_me.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
//
// optimization: {
//     minimizer: [
//       new UglifyJSPlugin({
//         sourceMap: true,
//         uglifyOptions: {
//           compress: {
//             inline: false
//           }
//         }
//       })
//     ],
//     runtimeChunk: false,
//     splitChunks: {
//       cacheGroups: {
//         default: false,
//         commons: {
//           test: /[\\/]node_modules[\\/]/,
//           name: 'vendor_app',
//           chunks: 'all',
//           minChunks: 2
//         }
//       }
//     }
//   },
