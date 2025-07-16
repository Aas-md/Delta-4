const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose")
const path = require("path")
const Chat = require("./models/chat.js")
const methodOverride = require('method-override')



app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

main().then((res) => {
    console.log("Connection successfull")
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(port, () => {
    console.log("Server is listenning on ", port)
})

app.get("/", (req, res) => {
    res.send("working")
})

app.get("/chats", async (req, res) => {
    const chats = await Chat.find();
    res.render("index.ejs", { chats });

})

app.get('/chats/new', (req, res) => {
    res.render("new");
})

app.post('/chats', (req, res) => {

    const { from, msg, to } = req.body;
    const chat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })

    chat.save().then((res) => {
        console.log("chat was saved successfuly");
    }).catch((e) => {
        console.log(e)
    })

    res.redirect("/chats")
})

app.get('/chats/:id/edit', async (req, res) => {

    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });

})

app.put('/chats/:id', (req, res) => {
    let { id } = req.params;
    let { msg } = req.body;
    let chat = Chat.findByIdAndUpdate(id, { msg: msg },
        { runValidators: true, new: true })
        .then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })

            res.redirect('/chats');
})