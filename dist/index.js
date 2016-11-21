'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// apis


// components


// propTypes


// modules


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Libraries/PanResponder/injectResponderEventPlugin');

var _Animated = require('./Libraries/Animated');

var _Animated2 = _interopRequireDefault(_Animated);

var _AppRegistry = require('./Libraries/AppRegistry');

var _AppRegistry2 = _interopRequireDefault(_AppRegistry);

var _AppState = require('./Libraries/AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _AsyncStorage = require('./Libraries/AsyncStorage');

var _AsyncStorage2 = _interopRequireDefault(_AsyncStorage);

var _DeviceEventEmitter = require('./Libraries/EventEmitter/DeviceEventEmitter');

var _DeviceEventEmitter2 = _interopRequireDefault(_DeviceEventEmitter);

var _Dimensions = require('./Libraries/Dimensions');

var _Dimensions2 = _interopRequireDefault(_Dimensions);

var _Easing = require('./Libraries/Easing');

var _Easing2 = _interopRequireDefault(_Easing);

var _InteractionManager = require('./Libraries/InteractionManager');

var _InteractionManager2 = _interopRequireDefault(_InteractionManager);

var _Linking = require('./Libraries/Linking');

var _Linking2 = _interopRequireDefault(_Linking);

var _NetInfo = require('./Libraries/NetInfo');

var _NetInfo2 = _interopRequireDefault(_NetInfo);

var _PanResponder = require('./Libraries/PanResponder');

var _PanResponder2 = _interopRequireDefault(_PanResponder);

var _PixelRatio = require('./Libraries/PixelRatio');

var _PixelRatio2 = _interopRequireDefault(_PixelRatio);

var _Platform = require('./Libraries/Platform');

var _Platform2 = _interopRequireDefault(_Platform);

var _StyleSheet = require('./Libraries/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _UIManager = require('./Libraries/UIManager');

var _UIManager2 = _interopRequireDefault(_UIManager);

var _CoreComponent = require('./Libraries/Components/CoreComponent');

var _CoreComponent2 = _interopRequireDefault(_CoreComponent);

var _ActivityIndicator = require('./Libraries/Components/ActivityIndicator');

var _ActivityIndicator2 = _interopRequireDefault(_ActivityIndicator);

var _Image = require('./Libraries/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ListView = require('./Libraries/Components/ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _Portal = require('./Libraries/Components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _ScrollView = require('./Libraries/Components/ScrollView');

var _ScrollView2 = _interopRequireDefault(_ScrollView);

var _Text = require('./Libraries/Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextInput = require('./Libraries/Components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Touchable = require('./Libraries/Components/Touchable/Touchable');

var _Touchable2 = _interopRequireDefault(_Touchable);

var _TouchableBounce = require('./Libraries/Components/Touchable/TouchableBounce');

var _TouchableBounce2 = _interopRequireDefault(_TouchableBounce);

var _TouchableHighlight = require('./Libraries/Components/Touchable/TouchableHighlight');

var _TouchableHighlight2 = _interopRequireDefault(_TouchableHighlight);

var _TouchableOpacity = require('./Libraries/Components/Touchable/TouchableOpacity');

var _TouchableOpacity2 = _interopRequireDefault(_TouchableOpacity);

var _TouchableWithoutFeedback = require('./Libraries/Components/Touchable/TouchableWithoutFeedback');

var _TouchableWithoutFeedback2 = _interopRequireDefault(_TouchableWithoutFeedback);

var _View = require('./Libraries/Components/View');

var _View2 = _interopRequireDefault(_View);

var _ColorPropType = require('./Libraries/StyleSheet/ColorPropType');

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _EdgeInsetsPropType = require('./Libraries/StyleSheet/EdgeInsetsPropType');

var _EdgeInsetsPropType2 = _interopRequireDefault(_EdgeInsetsPropType);

var _PointPropType = require('./Libraries/StyleSheet/PointPropType');

var _PointPropType2 = _interopRequireDefault(_PointPropType);

var _findNodeHandle = require('./modules/findNodeHandle');

var _findNodeHandle2 = _interopRequireDefault(_findNodeHandle);

var _NativeAppEventEmitter = require('./modules/NativeAppEventEmitter');

var _NativeAppEventEmitter2 = _interopRequireDefault(_NativeAppEventEmitter);

var _requireNativeComponent = require('./modules/requireNativeComponent');

var _requireNativeComponent2 = _interopRequireDefault(_requireNativeComponent);

var _web = require('../../../web');

var _web2 = _interopRequireDefault(_web);

var _BaseStyles = require('./Libraries/Components/BaseStyles');

var _BaseStyles2 = _interopRequireDefault(_BaseStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved
_web2.default.registerComponents(_requireNativeComponent.registerNativeComponent);

// other


var NativeModules = _extends({
  // apis
  Animated: _Animated2.default,
  AppRegistry: _AppRegistry2.default,
  AppState: _AppState2.default,
  AsyncStorage: _AsyncStorage2.default,
  DeviceEventEmitter: _DeviceEventEmitter2.default,
  Dimensions: _Dimensions2.default,
  Easing: _Easing2.default,
  InteractionManager: _InteractionManager2.default,
  Linking: _Linking2.default,
  NetInfo: _NetInfo2.default,
  PanResponder: _PanResponder2.default,
  PixelRatio: _PixelRatio2.default,
  Platform: _Platform2.default,
  StyleSheet: _StyleSheet2.default,
  UIManager: _UIManager2.default,

  // components
  CoreComponent: _CoreComponent2.default,
  ActivityIndicator: _ActivityIndicator2.default,
  Image: _Image2.default,
  ListView: _ListView2.default,
  Portal: _Portal2.default,
  ScrollView: _ScrollView2.default,
  Text: _Text2.default,
  TextInput: _TextInput2.default,
  Touchable: _Touchable2.default,
  TouchableBounce: _TouchableBounce2.default,
  TouchableHighlight: _TouchableHighlight2.default,
  TouchableOpacity: _TouchableOpacity2.default,
  TouchableWithoutFeedback: _TouchableWithoutFeedback2.default,
  View: _View2.default,

  // propTypes
  ColorPropType: _ColorPropType2.default,
  EdgeInsetsPropType: _EdgeInsetsPropType2.default,
  PointPropType: _PointPropType2.default,

  // modules
  findNodeHandle: _findNodeHandle2.default,
  requireNativeComponent: _requireNativeComponent2.default,
  NativeAppEventEmitter: _NativeAppEventEmitter2.default
}, _web2.default.nativeModules, {

  // other
  BaseStyles: _BaseStyles2.default

}, _react2.default);

NativeModules.NativeModules = NativeModules;

module.exports = NativeModules;