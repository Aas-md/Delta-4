const express = require("express");
const router = express.Router();


 //index route - post

router.get('/',(req,res)=>{
  res.send("index route post");
    
})


// show route - post

router.get('/:id',(req,res)=>{
   res.send("index route post");
    
})



// add route - post

router.post('/',(req,res)=>{
    res.send("index route post");
    
})



// update route - post

router.put('/',(req,res)=>{
    res.send("index route post");
    
})


module.exports = router;



