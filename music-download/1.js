const process = require('process');
const axios = require('axios');
process.title = 'node music';

let keywords = process.argv[2]
// 异步 立马不会请求回来
function request() {
  return axios({
    method: 'GET',
    url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
    data: {
      keywords
    }
  })
  .then(res => {
    // console.log(res);
    // promise then回调里面 返回内容 在后面接着链式调用 then 就可以继续取到返回的内容
    return res.data;
  })
}
request()
.then(songs => {
  console.log(songs)
})