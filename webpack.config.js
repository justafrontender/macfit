const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
});

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jpe?g|\.gif|\.png|\.ico|\.svg/,
        use: [
          {
            loader: `url-loader`,
            options: {
              limit: 10000,
              name: `[name].[hash:6].[ext]`,
            },
          },
          { loader: `image-webpack-loader` },
        ],
      }
    ]
  },

  devServer: {
    contentBase: './build',
    hot: true
  },

  plugins: [
    extractSass
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '*']
  }
};
