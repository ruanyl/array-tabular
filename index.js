'use strict';

function arrayTabular(arr) {
  var longest = 0;
  arr.forEach(function (ele) {
    longest = longest < ele.length ? ele.length : longest;
  });

  var before = function before() {
    var placeHolder = arguments.length <= 0 || arguments[0] === undefined ? ' ' : arguments[0];

    return arr.map(function (ele) {
      return new Array(longest - ele.length + 1).join(placeHolder) + ele;
    });
  };

  var after = function after() {
    var placeHolder = arguments.length <= 0 || arguments[0] === undefined ? ' ' : arguments[0];

    return arr.map(function (ele) {
      return ele + new Array(longest - ele.length + 1).join(placeHolder);
    });
  };

  return {
    before: before,
    after: after
  };
}

module.exports = arrayTabular;
