const mongoose = require('mongoose');
const {Schema} = mongoose;

//  one to squillion(billions of data)


main().then(()=>{
    console.log("connected with databse");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username : String,
    email : String
})

const postSchema = new Schema({

    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

const Post = mongoose.model("Post",postSchema)
const User = mongoose.model("User",userSchema)

let addData = async()=>{

    let user1 = new User({
        username : "aas7071",
        email : "aasmohd7071@gmail.com"
    })
    
    let post = new Post({
        content : "Hello I am Aas mohammad",
        likes : 7
    })
    post.user = user1;
    await user1.save()
    await post.save()
    
}

addData();

