var http = require('http');
var fs = require('fs');

var options = {
  host: 'www.baidu.com',
  port: '',
  path: '/'
}

var req = http.request(options, (res) =>{
  var body = ''
  res.on('data', (data)=>{
    body += data
  })
  res.on('end', ()=>{
    console.log(body)
    fs.writeFile('baidu.html', body, (err)=>{
      if (err) {
        console.log('写文件失败', err)
      } else {
        console.log('写文件成功')
      }
    })
  })
})
req.end()
