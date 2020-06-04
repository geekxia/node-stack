describe('demo1======================', function() {
  describe('测试函数1', function(){
    context('情境1', function() {
      before(function() {
        console.log('测试之前')
      })
      after(() => {
        console.log('测试之后');
      });
      beforeEach(function() {
        console.log('每条测试之前')
      })
      afterEach(function() {
        console.log('每条测试之前')
      })
      it('测试1', function() {
        console.log('测试1-函数')
      })
      it('测试2', function() {
        console.log('测试2-函数')
      })
    })
  })
})
