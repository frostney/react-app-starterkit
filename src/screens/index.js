var path = require('path');
var req = require.context('./', true, /(.*?\/index.js)/);

module.exports = req.keys().reduce(function(obj, name) {
  var preName = name.split('/index.js')[0];

  if (preName !== '.') {
    var moduleName = path.basename(preName).split(path.extname(name))[0];

    var evalModule = req(name);
    obj[moduleName] = (evalModule.default || evalModule);
  }

  return obj;
}, {});
