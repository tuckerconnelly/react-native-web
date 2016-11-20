'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Copyright (c) 2016-present, Nicolas Gallagher.
                    * Copyright (c) 2015-present, Facebook, Inc.
                    * All rights reserved.
                    *
                    * 
                    */

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Encapsulates the Web-specific scroll throttling and disabling logic
 */
var ScrollViewBase = (_temp = _class = function (_Component) {
  _inherits(ScrollViewBase, _Component);

  function ScrollViewBase(props) {
    _classCallCheck(this, ScrollViewBase);

    var _this = _possibleConstructorReturn(this, (ScrollViewBase.__proto__ || Object.getPrototypeOf(ScrollViewBase)).call(this, props));

    _this._debouncedOnScrollEnd = (0, _lodash2.default)(_this._handleScrollEnd, 100);
    _this._handlePreventableScrollEvent = _this._handlePreventableScrollEvent.bind(_this);
    _this._handleScroll = _this._handleScroll.bind(_this);
    _this._state = { isScrolling: false };
    return _this;
  }

  _createClass(ScrollViewBase, [{
    key: '_handlePreventableScrollEvent',
    value: function _handlePreventableScrollEvent(handler) {
      var _this2 = this;

      return function (e) {
        if (!_this2.props.scrollEnabled) {
          e.preventDefault();
        } else {
          if (handler) handler(e);
        }
      };
    }
  }, {
    key: '_handleScroll',
    value: function _handleScroll(e) {
      // NOTE Probably not super performant to e.persist(), given how many scroll
      // events are created onScroll
      e.persist();
      var scrollEventThrottle = this.props.scrollEventThrottle;
      // A scroll happened, so the scroll bumps the debounce.

      this._debouncedOnScrollEnd(e);
      if (this._state.isScrolling) {
        // Scroll last tick may have changed, check if we need to notify
        if (this._shouldEmitScrollEvent(this._state.scrollLastTick, scrollEventThrottle)) {
          this._handleScrollTick(e);
        }
      } else {
        // Weren't scrolling, so we must have just started
        this._handleScrollStart(e);
      }
    }
  }, {
    key: '_handleScrollStart',
    value: function _handleScrollStart() {
      this._state.isScrolling = true;
      this._state.scrollLastTick = Date.now();
    }
  }, {
    key: '_makeNativeEvent',
    value: function _makeNativeEvent(e) {
      return {
        nativeEvent: {
          contentOffset: {
            x: e.target.scrollLeft,
            y: e.target.scrollTop
          }
        }
      };
    }
  }, {
    key: '_handleScrollTick',
    value: function _handleScrollTick(e) {
      var onScroll = this.props.onScroll;

      this._state.scrollLastTick = Date.now();
      if (onScroll) onScroll(this._makeNativeEvent(e));
    }
  }, {
    key: '_handleScrollEnd',
    value: function _handleScrollEnd(e) {
      var onScroll = this.props.onScroll;

      this._state.isScrolling = false;
      if (onScroll) onScroll(this._makeNativeEvent(e));
    }
  }, {
    key: '_shouldEmitScrollEvent',
    value: function _shouldEmitScrollEvent(lastTick, eventThrottle) {
      var timeSinceLastTick = Date.now() - lastTick;
      return eventThrottle > 0 && timeSinceLastTick >= 1000 / eventThrottle;
    }
  }, {
    key: 'render',
    value: function render() {
      var propsWithoutScrollSpecificProps = (0, _omit2.default)(this.props, 'onScrollBeginDrag', 'onScrollEndDrag', 'onMomentumScrollBegin', 'onMomentumScrollEnd', 'scrollEnabled', 'scrollEventThrottle');
      return _react2.default.createElement(_View2.default, _extends({}, propsWithoutScrollSpecificProps, {
        onScroll: this._handleScroll,
        onTouchMove: this._handlePreventableScrollEvent(this.props.onTouchMove),
        onWheel: this._handlePreventableScrollEvent(this.props.onWheel)
      }));
    }
  }]);

  return ScrollViewBase;
}(_react.Component), _class.propTypes = _extends({}, _View2.default.propTypes, {
  onScroll: _react.PropTypes.func,
  onTouchMove: _react.PropTypes.func,
  onWheel: _react.PropTypes.func,
  scrollEnabled: _react.PropTypes.bool,
  scrollEventThrottle: _react.PropTypes.number
}), _class.defaultProps = {
  scrollEnabled: true
}, _temp);
exports.default = ScrollViewBase;