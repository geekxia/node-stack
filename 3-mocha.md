mocha介绍：最流行的JS测试框架之一，在浏览器和Node环境下都可以使用。

什么是测试框架？
	就是运行测试的工具，使用测试框架可以为JS应用添加测试，从而保证代码质量。

mocha安装与环境搭建：
	`npm install mocha -D`
	在项目根目录创建 test 目录
	在npm scripts中配置运行命令：
		"test": "mocha"
	运行测试：
		(1)在命令行中直接运行： `./node_modules/mocha/bin/mocha`
		(2)使用npm scripts命令：`npm test`
			test目录下测试文件，会按排列顺序逐个运行，从上到下
			test是mocha默认的支持目录
		(3)当测试目录不是默认目录test时：
			"test": "mocha costom_test_dir"
		(4)当测试目录有嵌套时，如果一次性执行所有测试文件？
			"test": "mocha costom_test_dir --recursive"  // 表示“递归”			

	编写一个测试文件：
		四个钩子函数
		it() 用例：一个it()就是一个测试

	使用断言assert：
		断言库chai：should风格断言、expect风格断言
		安装：`npm install chai -D`
		使用chai.assert
		使用chai.should()
		使用chai.expect

	测试项目实战：
		测试同步方法
		测试异步方法 setTimeout()
			it('', function(done) {
				// 断言代码
				done() // 让异步完成后再断言测试
			})
			测试运行：
				"test": "mocha -t 6000"  // mocha默认是2s
		测试HTTP接口：
			示例(在浏览器地址中演示数据抓取)：https://cnodejs.org/api/v1/topics
			使用https模块封装接口方法
			同上，使用`done()` 和 `mocha -t 6000`

		测试函数异常抛出：
			expect(fn).to.throw()
			当目标函数抛出异常时，测试通过；反之不通过。