const req = require.context(`!file-loader?name=favicons/[name].[ext]!./`, false, /\.(json|svg|png)/);
req.keys().map(file => req(file));
