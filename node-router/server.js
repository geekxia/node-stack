const http = require('http');
const url = require('url');
var router = require('./router');
var file = require('./router/file');

var server = http.createServer(function(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if (req.url !== '/favicon.ico') {
    var path = url.parse(req.url).pathname
    console.log('路径', path)
    // 当访问未定义的路由时，会报错，需要进行异常处理
    if(/.html/.test(path)) {
      console.log('访问 HTML 文件')
      file.readHtml(path, req, res)
    } else if (/(.png|.jpg|.jpeg)/.test(path)) {
      console.log('访问 img 文件')
      file.readImg(path, req, res)
    } else {
      try {
        path = path.replace(/\//,'')
        router[path](req, res)
      } catch (e) {
        // 未知路径，都使用首页路由
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('404 页面')
      }
    }

  }
})

server.listen(9999, function() {
  console.log('server is running on 9999')
})


/*
  实现步骤：
    1、创建server
    2、解析请求 url
    3、定义路由处理函数
    4、异常捕获处理

    5、实现图片访问

*/
