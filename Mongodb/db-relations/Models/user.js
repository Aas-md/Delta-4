const mongoose = require('mongoose');
const {Schema} = mongoose;


// one to few

main().then(()=>{
    console.log("connected with databse");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username : String,
    address : [
        {
            location : String,
            city : String
        }
    ]
})

const User = mongoose.model("User",userSchema);

const adduser = async()=>{

    let user1 = new User({
        username : "Aas",
        address : [{
            location : "Purana ganj",
            city : "Rampur"
        }]
    });
    user1.address.push({location : "Batla house okhla",city : "New Delhi"});

    let result = await user1.save();
    console.log(result);
}

adduser();
