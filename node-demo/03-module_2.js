
let num = 1
function add() {
  this.num++
}
function getNum() {
  return this.num
}

// exports.num = num
// exports.add = add
// exports.getNum = getNum

module.exports = {
  num,
  add,
  getNum
}
