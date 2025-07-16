const express = require("express");
const app = express();
const port = 8080;
const path = require("path");




app.listen(port, () => {
    console.log("app is listening on port ", port);
})

// app.get("/",(req,res)=>{
//     res.send("this is your resposne");
// })

// using ejs ->
//ejs is a package we can install it from npm it used to create html and js templata pages. 
//-in get request we do not use send method to send the html page we use render function. we make directory called view so that express can search for the given file name in view directory.

app.use(express.static(path.join(__dirname,"public/js")))
app.use(express.static(path.join(__dirname,"public/css")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {

    res.render("home.ejs");
})

// how to pass ejs file with the response

app.get('/search', (req, res) => {

    res.send("home.ejs");
})


// how to rander data to ejs file
//to pass the data into the ejs file basically with render we used to pass an object

// app.get('/rolldice',(req,res)=>{
//     let rolldiceVal = Math.floor(Math.random()*6) + 1;
//     res.render("rolldice.ejs",{num : rolldiceVal,num2 : "random value"});
// })

//simple instagram activity.

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    let followers = ["Aas", "Ankit", "Virat", "jain", "Rahul", "Rohit"];
    res.render("ig.ejs", { username, followers });
})


//condition statemnt in ejs




app.get('/rolldice', (req, res) => {
    let rolldiceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num: rolldiceVal, num2: "random value" });
})

app.get('/instagram/:username', (req, res) => {
    const { username } = req.params
    const instaData = require('./data.json');
    const userData = instaData[username]
    if (userData) {
        res.render("instagram.ejs", { data: userData });
    } else {
        res.render("error.ejs");
    }
})