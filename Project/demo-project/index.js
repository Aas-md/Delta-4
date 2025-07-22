const express = require("express");
const app = express();
const users = require("./user.js")
const posts = require("./post.js")


app.listen(3036, () => {
    console.log("App os listening on ",)
})



//home route

app.get('/', (req, res) => {
    res.send("app is working fine");
})

app.use('/users',users);
app.use('/posts',posts);






