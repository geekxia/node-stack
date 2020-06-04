

function ip2byte(str) {
  return str.trim().split('.').map(ele=>parseInt(ele%256).toString(2).padStart(8,'0')).join('')
}

console.log(ip2byte('127.0.255.1'))


const allEqual = arr => arr.every(val => val === arr[0]);

console.log(allEqual([1,2,3,4]))
console.log(allEqual([1,1,1,1]))
