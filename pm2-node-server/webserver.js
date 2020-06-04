const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()

app.use(express.static('public'))

// app.use('/api', proxy({
// 	target: 'http://localhost:9000',
// 	changeOrigin: true
// }))

app.listen(8000, ()=>{
    console.log('web server is running on 8000')
})
