var expect = require('chai').expect

describe('demo4==================', () => {
  it('使用expact风格的断言测试', function() {
    var value = 'hello'
    expect(value).to.exist
    expect(value).to.be.a('string')
    expect(value).to.equal('hello')
    expect(value).to.have.length(5)
    expect(value).to.not.equal('world')

    var num = 3
    expect(num).to.be.at.most(5)
    expect(num).to.be.at.least(3)
    expect(num).to.be.within(1,3)
  })
});
