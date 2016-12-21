var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();







var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var _ExecutionEnvironment2=_interopRequireDefault(_ExecutionEnvironment);
var _arrayFindIndex=require('array-find-index');var _arrayFindIndex2=_interopRequireDefault(_arrayFindIndex);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var connection=_ExecutionEnvironment2.default.canUseDOM&&(
window.navigator.connection||
window.navigator.mozConnection||
window.navigator.webkitConnection);


var eventTypes=['change'];

var connectionListeners=[];





var NetInfo={
addEventListener:function addEventListener(type,handler){
(0,_invariant2.default)(eventTypes.indexOf(type)!==-1,'Trying to subscribe to unknown event: "%s"',type);
if(!connection){
console.error('Network Connection API is not supported. Not listening for connection type changes.');
return{
remove:function remove(){}};

}

connection.addEventListener(type,handler);
return{
remove:function remove(){return NetInfo.removeEventListener(type,handler);}};

},

removeEventListener:function removeEventListener(type,handler){
(0,_invariant2.default)(eventTypes.indexOf(type)!==-1,'Trying to subscribe to unknown event: "%s"',type);
if(!connection){return;}
connection.removeEventListener(type,handler);
},

fetch:function fetch(){
return new Promise(function(resolve,reject){
try{
resolve(connection.type);
}catch(err){
resolve('unknown');
}
});
},

isConnected:{
addEventListener:function addEventListener(type,handler){
(0,_invariant2.default)(eventTypes.indexOf(type)!==-1,'Trying to subscribe to unknown event: "%s"',type);
var onlineCallback=function onlineCallback(){return handler(true);};
var offlineCallback=function offlineCallback(){return handler(false);};
connectionListeners.push([handler,onlineCallback,offlineCallback]);

window.addEventListener('online',onlineCallback,false);
window.addEventListener('offline',offlineCallback,false);

return{
remove:function remove(){return NetInfo.isConnected.removeEventListener(type,handler);}};

},

removeEventListener:function removeEventListener(type,handler){
(0,_invariant2.default)(eventTypes.indexOf(type)!==-1,'Trying to subscribe to unknown event: "%s"',type);

var listenerIndex=(0,_arrayFindIndex2.default)(connectionListeners,function(pair){return pair[0]===handler;});
(0,_invariant2.default)(listenerIndex!==-1,'Trying to remove NetInfo connection listener for unregistered handler');var _connectionListeners$=_slicedToArray(
connectionListeners[listenerIndex],3);var onlineCallback=_connectionListeners$[1];var offlineCallback=_connectionListeners$[2];

window.removeEventListener('online',onlineCallback,false);
window.removeEventListener('offline',offlineCallback,false);

connectionListeners.splice(listenerIndex,1);
},

fetch:function fetch(){
return new Promise(function(resolve,reject){
try{
resolve(window.navigator.onLine);
}catch(err){
resolve(true);
}
});
}}};



module.exports=NetInfo;