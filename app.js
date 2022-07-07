const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const toDoLists=["밥먹기"]
app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index',{toDoListTitle:'오늘의 할일: '+toDoLists.length,toDoLists:toDoLists})
})
app.post('/add_list',(req,res)=>{
    const newContent=req.body.username
    console.log(newContent+'추가')
    toDoLists.push(newContent)
    res.redirect('/')
})
app.listen(port,()=>{
    console.log("connected!")
})
