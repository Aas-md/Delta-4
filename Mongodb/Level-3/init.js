const mongoose = require("mongoose")
const Chat = require("./models/chat.js")

main().then((res) => {
    console.log("Connection successfull")
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


const chats = [

    {
        from : "Neha",
        to : "Priya",
        msg : "send me your exams sheet",
        created_at : new Date()
    },

    {
        from : "Aas",
        to : "Hamza",
        msg : "what about your work",
        created_at : new Date()
    },

    {
        from : "Bob",
        to : "Eve",
        msg : "what are you learing",
        created_at : new Date()
    },

    {
        from : "nethan",
        to : "elis",
        msg : "send me your exams sheet",
        created_at : new Date()
    },

    {
        from : "job",
        to : "smith",
        msg : "How are you playing",
        created_at : new Date()
    },

    {
        from : "steve",
        to : "Warner",
        msg : "why you baned for two years",
        created_at : new Date()
    },

    {
        from : "Rohit",
        to : "Virat",
        msg : "Is bowl moving or turning",
        created_at : new Date()
    },

]

Chat.insertMany(chats).then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})

