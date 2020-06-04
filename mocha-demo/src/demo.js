var https = require('https');

class Demo {
  getTotal (price, quantity) {
    return price * quantity
  }
  asyncGetTotal (price, quantity, callback) {
    setTimeout(()=>{
      callback(price * quantity)
    }, 1000)
  }
  fetchData(api, callback) {
    var url = 'https://cnodejs.org/api/v1'+api
    // 请求远程数据
    https.get(url, function(res) {
      res.setEncoding('utf8')
      var resData = ''
      res.on('data', function(chunk) {
        resData += chunk
      })
      res.on('end', function() {
        callback(JSON.parse(resData))
      })
    })
  }
  engine(fuel) {
    if (fuel !== 'gas') {
      throw new Error('not gas')
    }
  }
}

module.exports = Demo
