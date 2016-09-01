'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _NativeMethodsDecorator = require('../../../modules/NativeMethodsDecorator');

var _NativeMethodsDecorator2 = _interopRequireDefault(_NativeMethodsDecorator);

var _StyleSheet = require('../../StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var roleComponents = {
  article: 'article',
  banner: 'header',
  button: 'button',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  heading: 'h1',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};

var CoreComponent = (0, _NativeMethodsDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(CoreComponent, _Component);

  function CoreComponent() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, CoreComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CoreComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleLayout = (0, _debounce2.default)(function () {
      var onLayout = _this.props.onLayout;

      // isMounted comes from NativeMethodsDecorator

      if (!onLayout || !_this._isMounted) return;

      var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this);

      var x = _ReactDOM$findDOMNode.offsetLeft;
      var y = _ReactDOM$findDOMNode.offsetTop;
      var width = _ReactDOM$findDOMNode.offsetWidth;
      var height = _ReactDOM$findDOMNode.offsetHeight;

      setTimeout(function () {
        return onLayout({ nativeEvent: { layout: { width: width, height: height, x: x, y: y } } });
      });
    }, 20), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CoreComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleLayout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var accessibilityLabel = _props.accessibilityLabel;
      var accessibilityLiveRegion = _props.accessibilityLiveRegion;
      var accessibilityRole = _props.accessibilityRole;
      var accessible = _props.accessible;
      var component = _props.component;
      var testID = _props.testID;
      var type = _props.type;

      var other = _objectWithoutProperties(_props, ['accessibilityLabel', 'accessibilityLiveRegion', 'accessibilityRole', 'accessible', 'component', 'testID', 'type']);

      var Component = roleComponents[accessibilityRole] || component;

      delete other.onLayout;

      return _react2.default.createElement(Component, _extends({}, other, _StyleSheet2.default.resolve(other), {
        'aria-hidden': accessible ? null : true,
        'aria-label': accessibilityLabel,
        'aria-live': accessibilityLiveRegion,
        'data-testid': testID,
        role: accessibilityRole,
        type: accessibilityRole === 'button' ? 'button' : type
      }));
    }
  }]);

  return CoreComponent;
}(_react.Component), _class2.propTypes = {
  accessibilityLabel: _react.PropTypes.string,
  accessibilityLiveRegion: _react.PropTypes.oneOf(['assertive', 'off', 'polite']),
  accessibilityRole: _react.PropTypes.string,
  accessible: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  onLayout: _react.PropTypes.func,
  style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  testID: _react.PropTypes.string,
  type: _react.PropTypes.string
}, _class2.defaultProps = {
  accessible: true,
  component: 'div'
}, _temp2)) || _class;

module.exports = CoreComponent;