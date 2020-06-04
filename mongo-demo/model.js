var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient
var url = 'mongodb://localhost:27017'
var dbName = 'project'

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('数据库连接失败', err)
  } else {
    console.log('数据库连接成功')
    // 连接指定的项目数据库
    var db = client.db(dbName)
    // 执行数据库操作
    db.collection('users').find().skip(1).limit(3).toArray(function(err,docs) {
      console.log('查询结果：', docs)
    })
    // 关闭连接
    client.close()
  }
})
