var expect = require('chai').expect

var Demo = require('../src/demo');
var demo = new Demo()

describe('demo6====================', function() {
  it('异步方法测试', function(done) {
    demo.asyncGetTotal(10,3, function(data) {
      expect(data).to.equal(30)
      done()
    })
  })
})
