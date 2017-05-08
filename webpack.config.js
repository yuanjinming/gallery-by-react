var webpack = require("webpack");
var path = require("path");
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
  
  module.exports = {
	  entry: {
		  app: './src/components/app', //编译的入口文件
	  },
	  output: {
		  publicPath: '/build/', //服务器根路径
		  path: './build', //编译到当前目录
		  filename: '[name].js' //编译后的文件名字
	  },
	  module: {
		  loaders: [
			  { 
				  test: /\.jsx?$/, 
				  loaders: ["babel"], exclude: /node_modules/ },
			  {
				  test: /\.js$/,
				  loader: 'babel?presets=es2015'
			  }, {
				  test: /\.css$/,
				  loaders: ['style', 'css']
			  }, {
				  test: /\.less$/,
				  loaders: ['style', 'css', 'less'],
			  }, {
				  test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
				  loader: 'file-loader?name=[hash].[ext]'
			  }, {
				  test: /\.(png|jpg)$/,
				  loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
			  },{
       	 		  test: /\.json$/,
       			  loader: 'json-loader'
      		}
		  ]
	  },
	  plugins: [
		 new webpack.HotModuleReplacementPlugin()
	  ],
	  resolve: {
		  extensions: ['', '.js', '.jsx', '.less', '.css', '.json'],//后缀名自动补全
	  }
  };