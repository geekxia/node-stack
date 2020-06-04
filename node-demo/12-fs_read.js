var fs = require('fs');

var filePath = 'logs/hello.txt'

// 第一种写法
fs.readFile(filePath, function(err,data) {
  if(!err) {
    // 编码格式转化
    console.log(data.toString())
  }
})

fs.readFile(filePath, 'utf-8', function(err,data) {
  if(!err) {
    console.log(data)
  }
})
