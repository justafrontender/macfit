module.exports = {
  path: '.',
  filter: /\.(json|svg|png)/,
  pathTransform: _ => `file-loader?name=favicons/[name].[ext]!${_}`
};
