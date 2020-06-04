var chai = require('chai');
var expect = chai.expect

var Demo = require('../src/demo');
var demo = new Demo()

describe('description', () => {
  it('给汽车引擎加水，是错误的行为', function() {
    // .throw() 接受目标函数抛出的异常，且必须接受一个异常对象
    // 当目标函数异常时，测试通过
    // 当目标函数正常时，chai提示.throw()要接受一个异常对象
    expect(function() {
      demo.engine('water')
    }).to.throw()
    // 第二种写法
    expect(demo.engine.bind(demo,'water')).to.throw()
  })
});
