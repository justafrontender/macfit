const autoprefixer = require('autoprefixer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const csso = require('postcss-csso');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.js');

const extractSass = new ExtractTextPlugin({
  filename: 'style.[contenthash:6].css'
});

const prodConfig = {
  devtool: 'none',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            'css-loader',
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
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      parallel: true,
      extractComments: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-analyzer-report.html'
    }),
    extractSass
  ]
};

module.exports = merge(commonConfig, prodConfig);
