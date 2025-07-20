const mongoose = require('mongoose');
const {schema} = mongoose;




main().then(()=>{
    console.log("connected with databse");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new mongoose.Schema
