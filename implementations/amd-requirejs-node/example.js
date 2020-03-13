var requirejs = require('requirejs');

requirejs.config({
  nodeRequire: require
});

requirejs(['a', 'b'], function (a, b) {
  a.print();
  b.print();
});