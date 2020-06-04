var async = require('async');

function one(callback) {
  setTimeout(function() {
    callback(null, 'one')
  }, 2000)
}

function two(callback) {
  setTimeout(function() {
    callback(null, 'two')
  }, 5000)
}

// 串行无关联，取时间之和
console.time('test')
async.series([one, two], function(err, res) {
  console.log('串行无关联', res)
  console.timeEnd('test')
})
