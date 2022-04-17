const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        createProxyMiddleware("/api",{
            target:'https://netease-cloud-music-api-six-lovat.vercel.app',//正向代理,出现/api的请求将其代理成5000端口
            pathRewrite:{'^/api':""},//路径重写
            changeOrigin:true //在请求头中的Host字段,是否改变请求地址，false为原本地址，true为代理后的地址
        })
    )
}