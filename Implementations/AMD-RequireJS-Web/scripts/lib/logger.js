// logger.js

define(['lib/printer'], function (printer) {
  return {
    log: function (text) {
      printer.print(text);
    }
  }
});