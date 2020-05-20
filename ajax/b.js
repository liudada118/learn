const http = require('http')
const server =  http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charest=utf-8'})
    res.end('<h2>html</h2>')
})
server.listen(8080)