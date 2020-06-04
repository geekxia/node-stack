var url = require('url');  // 处理GET数据
var qs = require('querystring');  // 处理POST数据
var file = require('./file');

module.exports = {
  login: function(req, res) {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
    var query = url.parse(req.url, true).query
    console.log(query.user, query.pass)
    file.readHtml('success.html', req, res, query)
  },
  regist: function(req, res) {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
    // 接收post请求的数据
    var query = ''
    req.on('data', function(data) {
      query += data
    })
    req.on('end', function() {
      // 数据解析
      query = qs.parse(query)
      console.log(query.user, query.pass)
      file.readHtml('success.html', req, res, query)
    })
  }
}
