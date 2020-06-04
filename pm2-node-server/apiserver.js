const express = require('express')
const app = express()

const userRouter = require('./router/user')


//设置跨域访问（前端需要清除缓存后，才能再测试跨域）
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });


app.use('/api/user', userRouter)

app.listen(9000, ()=>{
    console.log('api server is running on 9000')
})
