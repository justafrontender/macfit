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
};

module.exports = merge(commonConfig, devConfig);
