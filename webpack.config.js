module.exports = {
	devtool: 'eval-source-map',
	// devtool: 'source-map',
  entry:  __dirname + "/assets/js/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "C:/Users/15945/Desktop/web/CarWebsite",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}