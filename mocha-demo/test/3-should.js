var should = require('chai').should();

describe('demo3================', function() {
  it('should风格的断言测试', function() {
    var value = 'hello'
    value.should.exist
    value.should.be.a('string')
    value.should.equal('hello')
    value.should.not.equal('world')
    value.should.have.length(5)
    // 用 and 进行链式调用
    value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string')
  })
})
