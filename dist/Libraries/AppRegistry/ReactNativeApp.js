'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _Portal = require('../Components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _StyleSheet = require('../StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _View = require('../Components/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactNativeApp = (_temp = _class = function (_Component) {
  _inherits(ReactNativeApp, _Component);

  function ReactNativeApp(props, context) {
    _classCallCheck(this, ReactNativeApp);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactNativeApp).call(this, props, context));

    _this._handleModalVisibilityChange = _this._handleModalVisibilityChange.bind(_this);
    return _this;
  }

  _createClass(ReactNativeApp, [{
    key: '_handleModalVisibilityChange',
    value: function _handleModalVisibilityChange(modalVisible) {
      _reactDom2.default.findDOMNode(this._root).setAttribute('aria-hidden', '' + modalVisible);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var initialProps = _props.initialProps;
      var RootComponent = _props.rootComponent;
      var rootTag = _props.rootTag;


      return _react2.default.createElement(
        _View2.default,
        { style: styles.appContainer },
        _react2.default.createElement(RootComponent, _extends({}, initialProps, { ref: function ref(c) {
            _this2._root = c;
          }, rootTag: rootTag })),
        _react2.default.createElement(_Portal2.default, { onModalVisibilityChanged: this._handleModalVisibilityChange })
      );
    }
  }]);

  return ReactNativeApp;
}(_react.Component), _class.propTypes = {
  initialProps: _react.PropTypes.object,
  rootComponent: _react.PropTypes.any.isRequired,
  rootTag: _react.PropTypes.any
}, _temp);


var styles = _StyleSheet2.default.create({
  /**
   * Ensure that the application covers the whole screen. This prevents the
   * Portal content from being clipped.
   */
  appContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});

module.exports = ReactNativeApp;