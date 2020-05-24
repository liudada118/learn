const express = require('express')
const data = require('./db.json')
const app = express()
app.get('/',function(req,res){
    res.json(data)
})
// app.get('/post/:id',function(req,res){
//     let id = req.params.id;
//     let post = data.posts.filter(post=>post.id == id)
//     res.json(post[0].content)
// })
app.listen(8080)