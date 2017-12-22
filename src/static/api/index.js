const req = require.context(`!file-loader?name=api/[name]!./`, false, /[^(\.\/index)]/);
console.log(req.keys());
req.keys().map(file => req(file));
