const express = require('express')
const router = express.Router()

var userArr = []

router.get('/list', (req, res, next)=>{
    const data = {
      success: true,
      data: [1,2,3,4],
		  status: 1
    }
    res.jsonp(data)
})

router.post('/add', (req, res, next)=>{
  console.log(req.body)
  res.json({err: 0, msg: 'success'})
})

module.exports = router
