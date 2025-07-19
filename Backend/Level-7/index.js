const express = require("express");
const app = express();
const ExpressError = require('./ExpressError.js');

app.listen(8080,()=>{
    console.log("app is listening on port 8080");
})

app.get('/',(req,res)=>{
    res.send("working fine");
})

//error handler


app.use('/err',(req,res)=>{
    expressError = new ExpressError(401,"Unauthorized");
   throw expressError;

});

app.use('/admin',(req,res)=>{
    expressError = new ExpressError(401,"You are not admin");
   throw expressError;

});

app.get('/err', (req, res, next) => {
    
  abcd = abcd;    
});

//genrating errors on other pages

app.get('/random', (req, res, next) => {
    
  abcd = abcd;    
});

app.get('/admin',(req,res)=>{
    express.send("this is admin page and you are not autorized for this");
})


app.use((err, req, res, next) => {
 
    const {status = 500,message = "Something went wrong"} = err;
    res.status(status).send(message);

})

