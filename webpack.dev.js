const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const devConfig = {
  entry: ['react-hot-loader/patch'],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './static',
    hot: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { minimize: true, },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    'last 2 versions',
                    'iOS 8'
                  ]
                }),
                csso()
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};

module.exports = merge(commonConfig, devConfig);
