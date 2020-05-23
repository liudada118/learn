const http = require('http')
const fs = require('fs')
const users = require('./users.json')
let version = 123456781
let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html;charest=utf-8'})
        fs.createReadStream('index.html').pipe(res)
        return
    }else if(req.url === '/users'){
        res.writeHead(200,{'Content-Type':'text/json;charest=utf-8'})
        // fs.createReadStream('index.httml').pipe(res)
        res.end(JSON.stringify(users))
    }
    // if(req.headers['if-none-match']){
    //     if(Number(req.headers['if-none-match']) == version){
    //         res.statusCode = 304
    //         res.end()
    //         return
    //     }else{
    //         res.setHeader('Etag',version)
    //         res.end('hello world2')
    //         return
    //     }
    // }
    // res.setHeader('Etag',version);
    // res.end('hello world')
})
server.listen(3000)
