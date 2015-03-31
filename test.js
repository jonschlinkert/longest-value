/*!
 * longest-value <https://github.com/jonschlinkert/longest-value>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var longest = require('./');

var arr = [{a: 'b'}, {a: 'bb'}, {a: 'bbbb'}, {a: 'bbb'}, {a: 'bb'}];

describe('longest value', function () {
  it('should return the longest value for the given property:', function () {
    longest(arr, 'a').should.equal('bbbb');
  });

  it('should throw an error when an array is not passed:', function () {
    (function () {
      longest();
    }).should.throw('longest-value expects an array.');
  });
});
