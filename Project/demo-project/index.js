const express = require("express");
const app = express();
const users = require("./user.js")
const posts = require("./post.js")
const cookieParser = require("cookie-parser");





app.listen(3036, () => {
    console.log("App os listening on 3036 ",)
})

//cookie parser midleware
app.use(cookieParser());

//home route

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send("app is working fine");
})

// cookies 

app.get("/cookies",(req,res)=>{
    res.cookie("Cookies","namaste")
    res.cookie("madeIn","inida");
    res.send("this is from cookies")
})

app.use('/users',users);
app.use('/posts',posts);






