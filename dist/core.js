var _findNodeHandle=require('./modules/findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _ReactDefaultInjection=require('react/lib/ReactDefaultInjection');var _ReactDefaultInjection2=_interopRequireDefault(_ReactDefaultInjection);
var _ReactMount=require('react/lib/ReactMount');




var _I18nManager=require('./apis/I18nManager');var _I18nManager2=_interopRequireDefault(_I18nManager);
var _StyleSheet=require('./apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);


var _Image=require('./components/Image');var _Image2=_interopRequireDefault(_Image);
var _Text=require('./components/Text');var _Text2=_interopRequireDefault(_Text);
var _TextInput=require('./components/TextInput');var _TextInput2=_interopRequireDefault(_TextInput);
var _View=require('./components/View');var _View2=_interopRequireDefault(_View);


var _createDOMElement=require('./modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_ReactDefaultInjection2.default.inject();

var ReactNativeCore={
createDOMElement:_createDOMElement2.default,
findNodeHandle:_findNodeHandle2.default,
render:_ReactMount.render,
unmountComponentAtNode:_ReactMount.unmountComponentAtNode,

I18nManager:_I18nManager2.default,
StyleSheet:_StyleSheet2.default,

Image:_Image2.default,
Text:_Text2.default,
TextInput:_TextInput2.default,
View:_View2.default};


module.exports=ReactNativeCore;