const http = require('http')
const url = require('url');   // 解析req.url
const fs = require('fs');

const server = http.createServer((req, res)=>{
  var path = url.parse(req.url).pathname
  console.log('path', path)
  var file = path.substr(1)
  if (path != '/favicon.ico') {
    fs.readFile('public/index.html', (err, data)=>{
      if(err) {
        console.log(err)
      } else {
        // res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data.toString())
      }
      res.end()
    })
  }  
})

server.listen('8989', '127.0.0.1', ()=>{
  console.log('server is running on 8989')
})
