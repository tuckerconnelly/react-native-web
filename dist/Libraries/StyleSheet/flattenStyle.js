'use strict';

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  (0, _invariant2.default)(style !== true, 'style may be false but not true');

  if (!Array.isArray(style)) {
    return style;
  }

  var result = {};

  var _loop = function _loop(i) {
    var computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      Object.keys(computedStyle).forEach(function (key) {
        result[key] = computedStyle[key];
      });
    }
  };

  for (var i = 0; i < style.length; ++i) {
    _loop(i);
  }
  return result;
}; /**
    * Copyright (c) 2016-present, Nicolas Gallagher.
    * Copyright (c) 2015-present, Facebook, Inc.
    * All rights reserved.
    *
    * 
    */