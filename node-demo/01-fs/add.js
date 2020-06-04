const fs = require('fs')

const args = process.argv

const file = args[2]

if (file) {
  fs.writeFile(`./${file}`, '', (err)=>{
    if (err) {
      console.log(err)
    } else {
      console.log('文件创建成功')
    }
  })
} else {
  console.log('请输入正确的文件名称')
}
