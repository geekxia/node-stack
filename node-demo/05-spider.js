var https = require('https')
var cheerio = require('cheerio');

var url = 'https://www.lagou.com'
var html = ''

https.get(url, function(res) {
  res.on('data', function(data) {
    html += data
  })
  res.on('end', function() {
    // console.log(html)
    getMenu(html)
  })
  res.on('error', function(err) {
    console.log(err)
  })
})

function getMenu(str) {
  var $ = cheerio.load(str)
  var cates = []
  $('.mainNavs').find('.menu_box').each(function(index, ele) {
    var cate = {
      title: '',
      list: []
    }
    cate.title = $(ele).find('h2').text().replace(/\s/g, '')
    $(ele).find('.menu_sub span').each(function(index, ele) {
      cate.list.push($(ele).text())
    })
    cates.push(cate)
  })
  console.log(cates)
}
