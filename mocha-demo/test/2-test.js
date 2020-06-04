var assert = require('chai').assert;

describe('demo==============2', function() {
  it('使用 assert 断言：', function() {
    var value = 'hello'
    assert.typeOf(value, 'string');
    assert.equal(value, 'hello')
    assert.lengthOf(value, 5);
  })
})
