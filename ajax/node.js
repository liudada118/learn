const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req,res){
    console.log(req.url)
    res.writeHead(200,{
        'Content-type' : 'text/html;charset=utf-8'
    })
    const file = fs.readFileSync('./ajax.html',{encoding:'utf8'})
    res.end(file)
})
server.listen(4000,function(){
    console.log('端口4000已经被调用')
})