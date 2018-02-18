const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  entry: ['react-hot-loader/patch'],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './static',
    hot: true,
    historyApiFallback: true,
    progress: true,
    proxy: [
      {
        context: ['/api', '/upload'],
        target: 'http://mf.litedisc.ru:80',
        changeOrigin: true,
        secure: false
      }
    ]
  },
};

module.exports = merge(commonConfig, devConfig);
