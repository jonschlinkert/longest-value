# longest-value [![NPM version](https://badge.fury.io/js/longest-value.svg)](http://badge.fury.io/js/longest-value)

> Get the longest value for the given property from an array of objects. Useful for aligning values.

## Install with [npm](npmjs.org)

```bash
npm i longest-value --save
```

## Usage

```js
var longest = require('longest-value');

var arr = [{a: 'b'}, {a: 'bb'}, {a: 'bbbb'}, {a: 'bbb'}, {a: 'bb'}];
longest(arr, 'a');
//=> 'bbbb'
```

## Other object/array utils
 * [longest](https://github.com/jonschlinkert/longest): Get the longest item in an array.
 * [rename-keys](https://github.com/jonschlinkert/rename-keys): Modify the names of the own enumerable properties (keys) of an object.
 * [sort-object](https://github.com/doowb/sort-object): Sort the keys in an object.  

## Running tests
Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/longest-value/issues)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 31, 2015._
