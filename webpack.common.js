const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/static/index.html'
});

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],

  output: {
    publicPath: '/',
    filename: '[name].[hash:6].bundle.js',
    chunkFilename: '[name].[chunkhash:6].js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: [['env', { modules: false }], 'react', 'stage-2'] }
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
    htmlWebpackPlugin
  ],

  resolve: {
    extensions: ['.js', '.json', '.scss', '*'],
    modules: [`node_modules`, 'src']
  }
};
