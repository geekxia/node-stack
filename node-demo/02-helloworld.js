const http = require('http')

// http.createServer的事件处理函数会自动地添加 'request'事件，该事件有两个参数，分别是请求体、响应体
// 每次客户端发来请求时，request绑定的处理函数都会被触发一次
http.createServer((req, res)=>{
  console.log(req.url)
  if (req.url !== '/favicon.ico') {
    // 设置响应头
    res.writeHeader(200, {'Content-Type': 'text/html; charset=utf-8'})
    // 向客户端写入内容
    res.write('Hello World.<br>')
    res.write('Hello World.<br>')
    // 结束HTTP会话，否则浏览请求转圈
    res.end('hello geek')
  }
}).listen(8989)

console.log('server is running on 8989')
