const express = require("express");
const app = express();
const port = 8080

app.use(express.urlencoded({extended : true}));
app.use(express.json())

app.listen(port,()=>{
    console.log("app is listening on port 8080")
})

app.get('/register',(req,res)=>{
    let {username , password} = req.query;
    console.log(req.query);
    res.send(`Standard GET request ${username}`)
})

app.post('/register',(req,res)=>{
    let {username , password} = req.body;
    res.send(`Standard POST request  ${username} and ${password}`)
})