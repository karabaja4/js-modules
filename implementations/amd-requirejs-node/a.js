// a.js

define(['c'], function (c) {
  return {
    print: function () {
      console.log('Hello from a');
      c.print();
    }
  }
});