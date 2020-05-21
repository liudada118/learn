const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req,res){
    if (req.url === '/'){
        const html = fs.readFileSync('./index.html',{encoding:'utf-8'})
        res.end(html)
    }else if(req.url === '/getpost'){
        let posts = [
            {title :'js',star : 1000},
            {title : 'php', star : 2000}
        ]
        let str = ''
        req.on('data',function(chunk){
            str +=chunk
        })
        req.on('end',function(){
            console.log(JSON.parse(str))
        })
        res.end(JSON.stringify(posts))
    }
    // console.log(req.url)
    // res.end('res')
})
server.listen(8080,function(){
    console.log('server is running 8080')
})