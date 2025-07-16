const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))

let posts = [

    {
        id: uuidv4(),
        username: "aas7071",
        content: "Hey this is my first post"
    },
    {
        id: uuidv4(),
        username: "yonus707",
        content: "I am using quaro"
    },
    {
        id: uuidv4(),
        username: "kashif12343",
        content: "I have placed at google"
    },
    {
        id: uuidv4(),
        username: "shakibal8081",
        content: "I play cricket daily"
    },
]

app.listen(port, () => {
    console.log("Listenning on port", port);
})

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
})


app.get('/posts/new', (req, res) => {
    res.render("new.ejs")
})

app.post('/posts', (req, res) => {
    let { username, content } = req.body
    posts.push({ id: uuidv4(), username, content });
    res.redirect("/posts");
})

app.get('/posts/:id', (req, res) => {

    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("id.ejs", { post });

})

app.patch('/posts/:id', (req, res) => {

    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    let content = req.body.content;
    post.content = content;
    console.log(post);
    res.redirect('/posts');


})

app.get('/posts/:id/edit', (req, res) => {

    let { id } = req.params;
    let post = posts.find((p) => id == p.id)

    res.render("edit.ejs", { post })

})

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id)
    res.redirect('/posts');

})