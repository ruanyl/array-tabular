array-tabular
========
[![build status](https://secure.travis-ci.org/ruanyl/array-tabular.svg)](http://travis-ci.org/ruanyl/array-tabular)
[![NPM version](https://badge.fury.io/js/array-tabular.svg)](http://badge.fury.io/js/array-tabular)

array tabular

## Installation

This module is installed via npm:

``` bash
$ npm install array-tabular
```

## Example Usage

``` js
var arrayTabular = require('array-tabular');
arrayTabular(['aa', 'bbb', 'cccc']).before(); // ['  aa', ' bbb', 'cccc']
arrayTabular(['aa', 'bbb', 'cccc']).after(); // ['aa  ', 'bbb ', 'cccc']

arrayTabular(['aa', 'bbb', 'cccc']).before('*'); // ['**aa', '*bbb', 'cccc']
arrayTabular(['aa', 'bbb', 'cccc']).after('*'); // ['aa*', 'bbb*', 'cccc']
```
