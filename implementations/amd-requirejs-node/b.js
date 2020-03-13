// b.js

define(function (require) {
  const c = require('c');
  return {
    print: function () {
      console.log('Hello from b');
      c.print();
    }
  }
});