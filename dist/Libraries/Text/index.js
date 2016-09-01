'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NativeMethodsDecorator = require('../../modules/NativeMethodsDecorator');

var _NativeMethodsDecorator2 = _interopRequireDefault(_NativeMethodsDecorator);

var _CoreComponent = require('../Components/CoreComponent');

var _CoreComponent2 = _interopRequireDefault(_CoreComponent);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = (0, _NativeMethodsDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: '_onPress',
    value: function _onPress(e) {
      if (this.props.onPress) this.props.onPress(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var numberOfLines = _props.numberOfLines;
      var onPress = _props.onPress;

      var other = _objectWithoutProperties(_props, ['className', 'numberOfLines', 'onPress']);

      return _react2.default.createElement(_CoreComponent2.default, _extends({}, other, {
        className: (0, _classnames2.default)('rnw-Text', className, numberOfLines === 1 && 'rnw-Text-singleLineStyle'),
        component: 'span',
        onClick: this._onPress.bind(this)
      }));
    }
  }]);

  return Text;
}(_react.Component), _class2.propTypes = {
  accessibilityLabel: _CoreComponent2.default.propTypes.accessibilityLabel,
  accessibilityRole: _CoreComponent2.default.propTypes.accessibilityRole,
  accessible: _CoreComponent2.default.propTypes.accessible,
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  numberOfLines: _react.PropTypes.number,
  onPress: _react.PropTypes.func,
  testID: _CoreComponent2.default.propTypes.testID
}, _class2.defaultProps = {
  accessible: true
}, _temp)) || _class;

module.exports = Text;