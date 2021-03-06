





'use strict';

var PooledClass=require('react/lib/PooledClass');

var twoArgumentPooler=PooledClass.twoArgumentPooler;








function BoundingDimensions(width,height){
this.width=width;
this.height=height;
}

BoundingDimensions.prototype.destructor=function(){
this.width=null;
this.height=null;
};





BoundingDimensions.getPooledFromElement=function(element){
return BoundingDimensions.getPooled(
element.offsetWidth,
element.offsetHeight);

};

PooledClass.addPoolingTo(BoundingDimensions,twoArgumentPooler);

module.exports=BoundingDimensions;