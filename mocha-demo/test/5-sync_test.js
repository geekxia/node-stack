var chai = require('chai');
var expect = chai.expect

var Demo = require('../src/demo');
var demo = new Demo()

describe('demo5===================', function() {
  it('单价10元，商品3件，应该是30元总价', function() {
    var total = demo.getTotal(10,3)
    expect(total).to.equal(30)
  })
})
