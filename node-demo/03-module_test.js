let util1 = require('./util1');
let util2 = require('./util2');

// 测试模块1
console.log(util1.name)
console.log(util1.getName())
util1.setName('lucy')
console.log(util1.name)
console.log(util1.getName())

// 测试模块2
console.log(util2.num)
console.log(util2.getNum())
util2.add()
util2.add()
console.log(util2.num)
console.log(util2.getNum())
