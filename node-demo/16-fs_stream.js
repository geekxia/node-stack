var fs = require('fs');
var zlib = require('zlib');

var inp = fs.createReadStream('package-lock.json')

var out = fs.createWriteStream('logs/package.gz')

var count = 0


inp.on('data', function(data) {
  console.log(`${++count}`, data.length)
  // 写入流
  // out.write(data)
})

// 管理流，链式调用
// 先创建.gz包，再写入
inp.pipe(zlib.createGzip()).pipe(out)



// 读取流的相关事件
inp.once('data', function(data) {
  console.log(data.length)
})
inp.on('end', function(data) {
  console.log('数据读取完成')
})
inp.on('error', function(data) {
  console.log('数据读取错误')
})

// 写入流的相关事件
out.on('pipe', function(source) {
  console.log('pipe', source)
})
out.on('close', function() {
  console.log('数据写入完成')
})
