const url = require('url');  // node  url 模块 内置
const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node"; // url 字符串
console.log(url.parse(urlString));