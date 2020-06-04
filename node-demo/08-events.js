var EventEmitter = require('events');

class Player extends EventEmitter {}

// var player = new Player()
var player = new EventEmitter()

// 可以多次被触发
player.on('play', function(arg) {
console.log('开始播放'+arg)
})

// 只会被触发一次
player.once('stop', function(arg) {
 console.log('停止播放'+arg)
})

// 触发事件、传递事件参数
player.emit('play', '音乐')
player.emit('play', '视频')

player.emit('stop', '音乐')
player.emit('stop', '视频')
