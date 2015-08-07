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
var obj = {a: 'b', c: 'dd', e: 'fff', g: 'hhhh', i: 'jjjjj', k: 'k', l: 'l'};

describe('longest value', function () {
  it('should return the longest value for the given property:', function () {
    longest(arr, 'a').should.equal('bbbb');
  });

  it('should return the longest value in the given object:', function () {
    longest(obj).should.equal('jjjjj');
    longest({a: 'b', c: 'dd', e: 'fff', g: 'h'}).should.equal('fff');
  });

  it('should throw an error when invalid args are passed:', function () {
    (function () {
      longest();
    }).should.throw('longest-value expects an object or array.');
  });
});
