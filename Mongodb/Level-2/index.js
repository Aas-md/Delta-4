const mongoose = require("mongoose")

main().then((res) => {

    console.log("connection successful");

}).catch((e) => {
    console.log("error", e);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

//user model

// const user = new User({
//     name : "fourth",
//     age : 40,
//     email : "fourth@gmail"
// });

//save

// user3.save()
// .then((res)=>{
//         console.log(res);
// }).catch((e)=>{
//     console.log("error",e)
// });


//find

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//find

// User.find({name : "third"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//update

// User.updateOne({name : "third"},{email : "updated@email"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });

//update many

// User.updateMany({name : "third"},{email : "updated@email"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });


//find and update

// User.findOneAndUpdate({name : "Aas Mohammad"},{age : 19},{new : true})
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// delete one

// User.deleteOne({ age: 40 })
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

// User.deleteMany({ age : {$lte  : 10} })
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

//find and delete

User.findOneAndDelete({name : "Aas Mohammad"})
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
