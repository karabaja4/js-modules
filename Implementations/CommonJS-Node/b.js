// b.js

exports.x = 1;

// same as:
// module.exports.x = 1;

// module.exports and exports are initially the same object - but it is module.exports that is actually exported if they end up to be not the same object.

// It means that this will work the same:

// module.exports.x = 1;
// # or:
// exports.x = 1;
// because it changes the property of the same object.

// But this will not be the same:

// module.exports = {x: 1};
// as this:
// exports = {x: 1};

// The last one will not export the x because it will substitute the object in exports
// (that was originally the same object as module.exports) while leaving the default empty object
// in module.exports to be actually exported.