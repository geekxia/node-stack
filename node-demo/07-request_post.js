var https = require('https')
var qs = require('querystring')

// 把对象转化成可提交的字符串序列
var data = qs.stringify({
  topic_id: '5d5bed6ed53e9171e98a975b',
  _csrf: 'jXE2Sdqn-fLTnzn68B3LKdzz1d8SvNEzEqNM'
})

// 从cnode控制台复制这些内容
var options = {
  hostname: 'cnodejs.org',
  port: '443',
  method: 'POST',
  path: '/topic/collect',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length': data.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Host': 'cnodejs.org',
    'Origin': 'https://cnodejs.org',
    'Referer': 'https://cnodejs.org/topic/5d89e0bb5cbcc579bb9ea7f0',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Cookie': 'UM_distinctid=16d625044c494-0aa54603a79c67-6a12167a-100200-16d625044c996; _ga=GA1.2.1464541967.1569312491; _gid=GA1.2.2130585692.1569312491; CNZZDATA1254020586=192566208-1569309461-https%253A%252F%252Fwww.baidu.com%252F%7C1569314945; node_club=s%3A5a33ddc4d1536726354b7dd8%24%24%24%24.M1SBZGt87%2BCBqXAeV%2Bj2MI9YIKaWreFixIdrRTT44Fw; connect.sid=s%3AOt761Qhg7b32crjUDtRgDUTi1dAluxBK.bWtWtZG136eaqn63VTmLhk7n8CeKR2toe5RIaJaMCHI; _gat=1',
    'X-CSRF-Token': 'jXE2Sdqn-fLTnzn68B3LKdzz1d8SvNEzEqNM'

  }
}

// 创建请求对象
var req = https.request(options, function(res) {
  var ret = ''
  res.on('data', function(data) {
    ret += data
  })
  res.on('end', function() {
    console.log(ret)
  })
})

req.on('error', function(err) {
  console.log('err', err)
})

// 发送POST请求
req.write(data)

req.end()
