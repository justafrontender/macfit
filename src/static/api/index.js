const req = require.context(
  `!file-loader?name=[path][name]&context=src/static!./`,
  false,
  /^\.\/(?!(.+)?(?:index(\.js)?$)).+$/
);

const reqImages = require.context(
  `!file-loader?name=[path][name].[ext]&context=src/static!./img/`,
  false,
  /^\.\/(?!(.+)?(?:index(\.js)?$)).+$/
);

req.keys().map(file => req(file));
reqImages.keys().map(file => reqImages(file));
