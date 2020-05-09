//轻量级的web 开发框架，js node 50%
const Koa = require('koa');  //请上KOA
const fs = require('fs')
const app = new Koa();
const main = ctx =>{
    // console.log(ctx)
    // ctx.response.body = 'Hello World'
    ctx.response.type = 'html'
    // ctx.response = ""
    let html = fs.readFileSync('./template.html','utf8')
    ctx.response.body= html
}
app.use(main)
app.listen(3000)