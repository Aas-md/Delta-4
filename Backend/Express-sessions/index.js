const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({ secret: "secretkey", resave: false, saveUninitialized: true }))

app.listen(8080, () => {
    console.log("server is listening on port 8080");
})

app.get('/', (req, res) => {

    res.send("working fine");
})


// checking the count of session

app.get('/count', (req, res) => {

    if (req.session.count)
        req.session.count++
    else req.session.count = 1;
    res.send(`You sent the request ${req.session.count} times`)
})

//storing and using session - register

app.get('/register',(req,res)=>{
    let {name = "Default name"} = req.query;
    req.session.name = name;
    
    res.redirect('hello')
})

app.get("/hello",(req,res)=>{
    res.send(`hello ${req.session.name}`)
})

