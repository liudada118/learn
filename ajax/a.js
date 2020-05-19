const http = require('http')
const fs = require('fs')
const server=http.createServer(function(req,res){
    console.log(req.url)
})
// const server = http.server
server.listen(4001,function(){
    console.log(已启动4001)
})