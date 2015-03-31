/*!
 * longest-value <https://github.com/jonschlinkert/longest-value>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var longest = require('longest');

module.exports = function longestValue(arr, prop) {
  if (!Array.isArray(arr)) {
    throw new TypeError('longest-value expects an array.');
  }

  var value = [];
  var len = arr.length;
  while (len--) {
    var obj = arr[len];
    if (obj.hasOwnProperty(prop)) {
      value.push(arr[len][prop]);
    } else {
      throw new Error('longest-value cannot find ' + prop + ' in array objects.');
    }
  }
  return longest(value);
};
