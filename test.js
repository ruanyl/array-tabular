'use strict';
var test = require('ava');
var arrayTabular = require('./');

test(function (t) {
  t.assert(arrayTabular(['aa', 'bbb', 'cccc']).before()[0] === '  aa');
  t.assert(arrayTabular(['aa', 'bbb', 'cccc']).after()[0] === 'aa  ');
});

test(function (t) {
  t.assert(arrayTabular(['aa', 'bbb', 'cccc']).before('*')[0] === '**aa');
  t.assert(arrayTabular(['aa', 'bbb', 'cccc']).after('*')[0] === 'aa**');
});
