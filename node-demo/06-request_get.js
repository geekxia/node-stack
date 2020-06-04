var https = require('https')

var options = {
  hostname: 'cnodejs.org',
  port: '443',
  method: 'GET',
  path: '/api/v1/topics?limit=1'
}

var req = https.request(options, function(res) {
  // res.setEncoding('utf8')
  var str = ''
  res.on('data', function(data) {
    str += data
  })
  res.on('end', function() {
    // 解析为JSON格式
    var res = JSON.parse(str)
    if (res.success) {
      console.log(res.data)
    }
  })
})

req.on('error', function(err) {
  console.log(err)
})

req.end()
