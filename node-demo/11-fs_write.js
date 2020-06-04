var fs = require('fs');

var filePath = 'logs/hello.txt'
var text = "写入文件的内容\n"

// 异步  覆写
fs.writeFile(filePath, text, function(err) {
  if (!err) {
    console.log('成功写入文件')
  }
})

// 异步  追加写入文件
fs.appendFile(filePath, text, function(err) {
  if (!err) {
    console.log('成功写入文件')
  }
})
