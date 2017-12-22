module.exports = {
  entry: ['react-hot-loader/patch'],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true
  }
};
