var fs = require('fs');

var filePath = 'logs/hello.txt'
var newName = 'logs/greet.txt'

fs.rename(filePath, newName, function(err) {
  if(!err) {
    console.log('文件名称修改成功')
  }
})

// 不仅可以修改文件名
// 还可以修改文件夹的名字
