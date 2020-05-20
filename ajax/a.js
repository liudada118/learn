const http = require('http')
const fs = require('fs')
const server=http.createServer(function(req,res){
    if(req.url.includes('search')){
        res.end('hello world')
        // res.end(req.url.split('?')[1])
    }
    res.writeHead(200,{'Content-type' : 'text/html;charset=utf8'})
    const file = fs.readFileSync('./ajax.html',{encoding:'utf-8'})
    res.end( file)
    console.log(req.url)
})
// const server = http.server
server.listen(4001,function(){
    console.log('已启动4001')
})