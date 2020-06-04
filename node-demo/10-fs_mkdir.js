var fs = require('fs');

fs.mkdir('logs', function(err) {
  if (!err) {
    console.log('目录创建成功')
  }
})
