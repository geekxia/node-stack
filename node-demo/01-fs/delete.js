const fs = require('fs')
const args = process.argv

console.log(args)

const file = args[2]

if (file) {
  fs.unlink(`./${file}`, (err)=>{
    if (err) {
      console.log(err)
    } else {
      console.log('删除成功')
    }
  })
} else {
  console.log('请输入文件名')
}

if(file){
  fs.unlink
}else{
  console.log()
}
