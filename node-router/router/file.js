var fs = require('fs');

module.exports = {
  // 读取HTML文件
  readHtml: function(path, req, res, args) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    fs.readFile('./public/'+path,'utf-8', function(err, data) {
      if (err) {
        console.log(err)
      } else {
        if (args) {
          var str = '用户名：'+args.user+' 密码：'+args.pass
          // 读取文件时，需指定 utf-8，否则 replace方法会报错
          data = data.replace(/{content}/, str)
        } else {
          // 直接访问success页面时，隐藏掉{content}
          data = data.replace(/{toggle}/, 'hide')
        }
        res.write(data)
        res.end()
      }
    })
  },
  // 读取图片
  readImg: function(path, req, res, args) {
    fs.readFile('./public/'+path, function(err, data) {
      if (err) {
        console.log(err)
      } else {
        res.write(data)
        res.end()
      }
    })
  }
}
