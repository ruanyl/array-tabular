'use strict';

function arrayTabular(arr) {
  let longest = 0;
  arr.forEach(function(ele) {
    longest = longest < ele.length ? ele.length : longest;
  });

  let before = function(placeHolder = ' ') {
    return arr.map(function(ele) {
      return new Array(longest - ele.length + 1).join(placeHolder) + ele;
    });
  };

  let after = function(placeHolder = ' ') {
    return arr.map(function(ele) {
      return ele + new Array(longest - ele.length + 1).join(placeHolder);
    });
  };

  return {
    before: before,
    after: after
  };
}

module.exports = arrayTabular;
