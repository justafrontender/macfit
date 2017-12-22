const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = merge(common, process.env.NODE_ENV === 'production' ? prod : dev);
