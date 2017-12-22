const req = require.context(`!file-loader?name=api/[name]!./`, false, /^\.\/[a-zA-Z0-9-]+[^index(.js)?]$/);
req.keys().map(file => req(file));
