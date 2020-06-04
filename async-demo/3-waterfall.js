var async = require('async');

function one(callback) {
  setTimeout(()=>{
    console.log('one done')
    callback(null, '传递参数给-two')
  }, 1000)
}

function two(arg, callback) {
  setTimeout(()=>{
    console.log(arg)
    console.log('two done')
    callback(null, '传递参数给-three')
  }, 2000)
}

function three(arg, callback) {
  setTimeout(()=>{
    console.log(arg)
    console.log('three down')
    callback(null, '最终res结果')
  }, 3000)
}

// 串行有关联
async.waterfall([one, two, three], function(err, res) {
  console.log(res)
})
