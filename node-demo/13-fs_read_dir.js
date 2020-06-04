var fs = require('fs');

// 读取文件目录
fs.readdir('logs', function(err, files) {
  if (!err) {
    console.log(files)
  }
})
