'use strict';

var _NativeMethodsMixin = require('../NativeMethodsMixin');

var _NativeMethodsMixin2 = _interopRequireDefault(_NativeMethodsMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * 
 */

var lifecycleMethods = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentShouldUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

var NativeMethodsDecorator = function NativeMethodsDecorator(Component) {
  Object.keys(_NativeMethodsMixin2.default).forEach(function (method) {
    if (!Component.prototype[method]) {
      Component.prototype[method] = _NativeMethodsMixin2.default[method];
    } else if (lifecycleMethods.indexOf(method) !== -1) {
      (function () {
        var currentMethod = Component.prototype[method];
        Component.prototype[method] = function () {
          currentMethod.call(this);
          _NativeMethodsMixin2.default[method].call(this);
        };
      })();
    }
  });
  return Component;
};

module.exports = NativeMethodsDecorator;