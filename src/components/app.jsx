var React = require('react');
var ReactDOM = require('react-dom');
require('../style/main.css');
//获取图片相关数据
var imageDatas=require('../data/imageDatas');
//利用自执行函数，将图片信息转换成图片URL路径信息
imageDatas=(function getImageUrl(imageDatasArr){
	for (var i=0,j=imageDatasArr.length;i<j;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require('../image/'+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;
	}

	return imageDatasArr;
 })(imageDatas)// 	return imageDatasArr;

 var GalleryByReactApp=React.createClass({
     render:function(){
     	return (<section className="stage">
		 	<section className="img-sec"></section>
			<nav className="controller-nav"></nav>
		 
		 
		 </section>);

    }
 })
ReactDOM.render(<GalleryByReactApp/>,document.getElementById('content'));
