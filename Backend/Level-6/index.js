const express = require("express");
const app = express();
const port = 8080;

//midle ware function
// app.use((req,res,next)=>{
//     console.log("I am first middle ware")
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("I am second middle ware")
//     next();
// })

// utility midleware

app.use('/',(req,res,next)=>{
   
    console.log("starting with for slash(root path)",req.method);
    next();
})

//midle for all those request starting with random

app.use('/random',(req,res,next)=>{
    console.log("I am middle from random");
    next();
})

// midle for 404 page not found error

// app.use((req,res)=>{
//     res.send("page not found 404");
// })


// api token -> midle ware for api token autyhentication

app.use('/api',(req,res,next)=>{
    
    let {token} = req.query;
    if(token === "giveaccess")
        return next();
    res.send("Access denied");
})

app.get('/api',(req,res)=>{
    res.send("this is your api data");
})

app.listen(port,()=>{
    console.log("app is listing on port",port);
})

app.get('/',(req,res)=>{
    
    res.send("working fine");
})



app.get('/random',(req,res)=>{
    
    res.send("random is working fine");
})