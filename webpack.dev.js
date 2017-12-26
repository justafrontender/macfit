module.exports = {
  entry: ['react-hot-loader/patch'],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './static',
    hot: true,
    historyApiFallback: true
  }
};
