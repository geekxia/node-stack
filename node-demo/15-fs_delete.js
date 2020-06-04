var fs = require('fs');

// 遍历，删除文件
fs.readdirSync('logs').map(function(file) {
  // 注意，要使用同步方法
  fs.unlinkSync('logs/'+file, function(err) {
    console.log('文件遍历 删除成功')
  })
})


// 删除文件夹
// 注意，当文件夹不为空时，是无法删除的
fs.rmdirSync('logs', function(err) {
  if(!err) {
    console.log('目录删除成功')
  } else {
    console.log(err)
  }
})
