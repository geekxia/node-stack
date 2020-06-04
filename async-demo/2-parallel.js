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

// 并行无关联，取最大时间
console.time('test')
async.parallel([one, two], function(err, res) {
  console.log('并行无关联', res)
  console.timeEnd('test')
})
