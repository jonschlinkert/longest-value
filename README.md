# longest-value [![NPM version](https://badge.fury.io/js/longest-value.svg)](http://badge.fury.io/js/longest-value)

> Get the longest value for the given property from an array of objects, or the longest value in an object. Useful for aligning values for text tables, CLI help, etc.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i longest-value --save
```

## Usage

```js
var longest = require('longest-value');

var arr = [{a: 'b'}, {a: 'bb'}, {a: 'bbbb'}, {a: 'bbb'}, {a: 'bb'}];
longest(arr, 'a');
//=> 'bbbb'

longest({a: 'b', c: 'dd', e: 'fff', g: 'h'})
//=> 'fff'
```

## Other object/array utils

* [longest](https://github.com/jonschlinkert/longest): Get the longest item in an array.
* [rename-keys](https://github.com/jonschlinkert/rename-keys): Modify the names of the own enumerable properties (keys) of an object.
* [sort-object](https://github.com/doowb/sort-object): Sort the keys in an object.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/longest-value/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 07, 2015._