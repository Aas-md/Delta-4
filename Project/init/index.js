const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";


main().then(()=>{
    console.log("connected to db")
}).catch((e)=>{
    console.log(e)
})

async function main(){

    await mongoose.connect(mongoose_url);
}

async function initDB(){
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data saved succcessfully");
}

