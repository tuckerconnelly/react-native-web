var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _ListViewDataSource=require('./ListViewDataSource');var _ListViewDataSource2=_interopRequireDefault(_ListViewDataSource);
var _ListViewPropTypes=require('./ListViewPropTypes');var _ListViewPropTypes2=_interopRequireDefault(_ListViewPropTypes);
var _ScrollView=require('../ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ListView=function(_Component){_inherits(ListView,_Component);













function ListView(props){_classCallCheck(this,ListView);var _this=_possibleConstructorReturn(this,(ListView.__proto__||Object.getPrototypeOf(ListView)).call(this,
props));_initialiseProps.call(_this);
_this.state={
curRenderedRowsCount:_this.props.initialListSize,
highlightedRow:{}};

_this.onRowHighlighted=function(sectionId,rowId){return _this._onRowHighlighted(sectionId,rowId);};return _this;
}_createClass(ListView,[{key:'getScrollResponder',value:function getScrollResponder()

{
return this._scrollViewRef&&this._scrollViewRef.getScrollResponder();
}},{key:'scrollTo',value:function scrollTo()

{var _scrollViewRef;
return this._scrollViewRef&&(_scrollViewRef=this._scrollViewRef).scrollTo.apply(_scrollViewRef,arguments);
}},{key:'setNativeProps',value:function setNativeProps(

props){
return this._scrollViewRef&&this._scrollViewRef.setNativeProps(props);
}},{key:'_onRowHighlighted',value:function _onRowHighlighted(

sectionId,rowId){
this.setState({highlightedRow:{sectionId:sectionId,rowId:rowId}});
}},{key:'render',value:function render()

{
var dataSource=this.props.dataSource;
var header=this.props.renderHeader?this.props.renderHeader():undefined;
var footer=this.props.renderFooter?this.props.renderFooter():undefined;


var children=[];
var sections=dataSource.rowIdentities;
var renderRow=this.props.renderRow;
var renderSectionHeader=this.props.renderSectionHeader;
var renderSeparator=this.props.renderSeparator;
for(var sectionIdx=0,sectionCnt=sections.length;sectionIdx<sectionCnt;sectionIdx++){
var rows=sections[sectionIdx];
var sectionId=dataSource.sectionIdentities[sectionIdx];


if(renderSectionHeader){
var section=dataSource.getSectionHeaderData(sectionIdx);
var key='s_'+sectionId;
var child=_react2.default.createElement(_View2.default,{key:key},renderSectionHeader(section,sectionId));
children.push(child);
}


for(var rowIdx=0,rowCnt=rows.length;rowIdx<rowCnt;rowIdx++){
var rowId=rows[rowIdx];
var row=dataSource.getRowData(sectionIdx,rowIdx);
var _key='r_'+sectionId+'_'+rowId;
var _child=_react2.default.createElement(_View2.default,{key:_key},renderRow(row,sectionId,rowId,this.onRowHighlighted));
children.push(_child);


if(renderSeparator&&(rowIdx!==rows.length-1||sectionIdx===sections.length-1)){
var adjacentRowHighlighted=
this.state.highlightedRow.sectionID===sectionId&&(
this.state.highlightedRow.rowID===rowId||
this.state.highlightedRow.rowID===rows[rowIdx+1]);
var separator=renderSeparator(sectionId,rowId,adjacentRowHighlighted);
children.push(separator);
}
}
}

return _react2.default.cloneElement(this.props.renderScrollComponent(this.props),{
ref:this._setScrollViewRef},
header,children,footer);
}}]);return ListView;}(_react.Component);ListView.defaultProps={initialListSize:10,pageSize:1,renderScrollComponent:function renderScrollComponent(props){return _react2.default.createElement(_ScrollView2.default,props);},scrollRenderAheadDistance:1000,onEndReachedThreshold:1000,stickyHeaderIndices:[]};ListView.DataSource=_ListViewDataSource2.default;var _initialiseProps=function _initialiseProps(){var _this2=this;this.

_setScrollViewRef=function(component){
_this2._scrollViewRef=component;
};};process.env.NODE_ENV!=="production"?ListView.propTypes=_ListViewPropTypes2.default:void 0;


module.exports=(0,_applyNativeMethods2.default)(ListView);