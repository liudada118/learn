var fs = require('fs'); // node file system node 自己的模块
var path = require('path');
// uuid npm 第三方
// fs.readFile('aa.txt', function(err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// })

function getDirFiles(startPath) {
  // 子目录， 孙目录 递归目录
  // 递归 
  // 1. 一个大问题 分解成很多个相同的小问题
  // 2. 退出条件 目录下没有子目录了
  let result = [];
  // 1.读取所有文件?
  let files = fs.readdirSync();
  return result;
}
console.log(getDirFiles('src'));