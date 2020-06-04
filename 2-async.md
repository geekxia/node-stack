安装：npm install async -S

学习内容：
	async.series([], cb)  串行无关联
	async.parallel()  并行无关联
	async.waterfall()  串行有关联

	npm scripts 入门一下：把上述三个demo，用npm scripts配置并运行起来。
	```
	npm [run] start
	npm run async1
	npm run async2
	```