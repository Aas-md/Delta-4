const express = require("express");
const router = express.Router();

// index route - user
 // basically we removes the common path like in this case the /users was the common path
router.get('/',(req,res)=>{ 
   
  res.send("index route user");
    
})


// show route - user

router.get('/:id',(req,res)=>{
   res.send("index route user");
    
})



// add route - user

router.post('/',(req,res)=>{
    res.send("add route user");
    
})



// update route - user

router.put('/',(req,res)=>{
    res.send("update route user");
    
})

module.exports = router;