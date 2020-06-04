var http = require('http')
var path = require('path')
var fs = require('fs')

var server = http.createServer(function(req, res) {
	var url = req.url
	console.log(url)
	if (url != '/favicon.ico') {
		url = url === '/' ? '/index.html' : url
		var filePath = path.join(__dirname, '/public' + url)
		console.log(filePath)
		fs.stat(filePath, (err, stats) => {
			if (err) {
				res.statusCode = 404
				res.setHeader('Content-text', 'text/plain')
				res.end(`${filePath} is not a directoru or file`)
			}
			// 如果是一个文件
			if (stats.isFile()) {
				res.statusCode = 200
				res.setHeader('Content-text', 'text/plain')
				fs.createReadStream(filePath).pipe(res)
			} else if (stats.isDirectory()) {
				fs.readdir(filePath, (err, files) => {
					res.statusCode = 200
					res.setHeader('Content-text', 'text/plain')
					res.end(files.join(','))
				})
			}
		})

	}
})

server.listen(3000, function() {
	console.log('server is running on 3000')
})
