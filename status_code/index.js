const http = require('http')

http.createServer((req,res)=>{
    if(req.url === '/newPage'){
        res.writeHead(204)
        return
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.write('hello world')
    res.end(
        `
        <html>
            <head></head>
            <body>
                <a href="/newPage">新的页面</a>
            </body>
        </html>
        `
    )
}).listen(3000)