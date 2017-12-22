const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const extractSass = new ExtractTextPlugin({
  filename: 'style.[contenthash].css'
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  // favicon: 'src/static/favicon.ico',
  filename: 'index.html',
  template: 'src/static/index.html'
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],

  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:6].js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          },
          { loader: 'eslint-loader' },
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
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
    contentBase: './static',
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    extractSass,
    htmlWebpackPlugin
  ],

  devtool: 'cheap-eval-source-map',

  resolve: {
    extensions: ['.js', '.json', '.scss', '*']
  }
};
