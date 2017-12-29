const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'style.[contenthash:6].css'
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/static/index.html'
});

module.exports = {
  entry: ['./src/index.js'],

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
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ],
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
            options: { presets: [['env', { modules: false }], 'react'] }
          },
          { loader: 'eslint-loader' },
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `img/[name].[hash:6].[ext]`,
            },
          },
          { loader: `image-webpack-loader` },
        ],
      }
    ]
  },

  plugins: [
    extractSass,
    htmlWebpackPlugin
  ],

  resolve: {
    extensions: ['.js', '.json', '.scss', '*']
  }
};
