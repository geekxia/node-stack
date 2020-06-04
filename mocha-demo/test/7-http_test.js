const expect = require('chai').expect;

var Demo = require('../src/demo')
var demo = new Demo()

describe('demo7==================', () => {
  it('测试HTTP接口，如果应该包含 文章列表字段', function(done) {
    demo.fetchData('/topics', function(res) {
      // 如果请求成功，则返回数据中包含 data=[] 文章列表字段
      expect(res).to.have.property('data')
      done()
    })
  })
});
