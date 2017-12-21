const req = require.context(`!file-loader?name=favicons/[name].[ext]!./`, false, /\./);

/* eslint-disable no-unused-vars */
let favicons = [
  `./manifest.json`,
  `./android-chrome-192x192.png`,
  `./android-chrome-512x512.png`,
  `./apple-touch-icon.png`,
  `./favicon-16x16.png`,
  `./favicon-32x32.png`,
  `./favicon.svg`,
  `./safari-pinned-tab.svg`,
];
/* eslint-enable no-unused-vars */

favicons = favicons.map(file => req(file));
