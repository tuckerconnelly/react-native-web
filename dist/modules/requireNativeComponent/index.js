'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNativeComponent = registerNativeComponent;
exports.default = requireNativeComponent;

var _UIManager = require('../../Libraries/UIManager');

var _UIManager2 = _interopRequireDefault(_UIManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerNativeComponent(name, component) {
  _UIManager2.default[name] = component;
}

// TODO Verify props
function requireNativeComponent(name) {
  return _UIManager2.default[name];
}