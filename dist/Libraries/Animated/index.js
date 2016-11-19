'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _animated = require('animated');

var _animated2 = _interopRequireDefault(_animated);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _AppRegistry = require('../AppRegistry');

var _AppRegistry2 = _interopRequireDefault(_AppRegistry);

var _StyleSheet = require('../StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _View = require('../Components/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _traverse(internalInstance, visitor) {
  visitor(internalInstance);
  if (internalInstance._renderedComponent) {
    _traverse(internalInstance._renderedComponent, visitor);
  }
  if (internalInstance._renderedChildren) {
    Object.keys(internalInstance._renderedChildren).forEach(function (childKey) {
      return _traverse(internalInstance._renderedChildren[childKey], visitor);
    });
  }
}

var callOnLayout = (0, _debounce2.default)(function () {
  if (!_AppRegistry2.default.getAppElement()) return;
  _traverse(_AppRegistry2.default.getAppElement()._reactInternalInstance, function (_ref) {
    var _instance = _ref._instance;
    return _instance && _instance.handleLayout && _instance.handleLayout();
  });
}, 100);

_animated2.default.inject.InteractionManager({
  createInteractionHandle: function createInteractionHandle() {
    return 0;
  },
  clearInteractionHandle: callOnLayout
});

_animated2.default.inject.FlattenStyle(_StyleSheet2.default.flatten);

module.exports = _extends({}, _animated2.default, {
  Image: _animated2.default.createAnimatedComponent(_Image2.default),
  Text: _animated2.default.createAnimatedComponent(_Text2.default),
  View: _animated2.default.createAnimatedComponent(_View2.default)
});