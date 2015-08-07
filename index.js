/*!
 * longest-value <https://github.com/jonschlinkert/longest-value>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var longest = require('longest');

module.exports = function longestValue(obj, prop) {
  if (typeof obj !== 'object') {
    throw new TypeError('longest-value expects an object or array.');
  }
  if (Array.isArray(obj)) {
    return longest(arrayValues(obj, prop));
  }
  return longest(objectValues(obj));
};

function objectValues(obj) {
  var values = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

function arrayValues(arr, prop) {
  var values = [];
  var len = arr.length;
  while (len--) {
    var obj = arr[len];
    if (obj.hasOwnProperty(prop)) {
      values.push(arr[len][prop]);
    } else {
      throw new Error('longest-value cannot find ' + prop + ' in array objects.');
    }
  }
  return values;
}
