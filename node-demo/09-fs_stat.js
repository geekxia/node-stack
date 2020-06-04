var fs = require('fs');

// 获取文件信息
fs.stat('package-lock.json', function(err, stats) {
  console.log(stats.isFile())
  console.log(stats.isDirectory())
})
