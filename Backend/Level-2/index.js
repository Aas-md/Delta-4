const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log("port is listening on port ", port)
})

//handing response

// app.use((req,res)=>{
//     console.log("request received");
//     let data = {name : "Aas MOhammad",age : 25};
//     res.send(data);
// })


// rout we have different method to send the response from them one of the method is get.

app.get('/', (req, res) => {
    res.send("you have reached the homepage");
})

app.get('/home', (req, res) => {
    res.send("you have reached the home");
})


app.get('/search', (req, res) => {
    res.send("Hello seach");
})



// path perameters.
// genrally perameters can be any thing /aas or /microsoft or /anything so we do not write all these functions for these values so instead we just take a permater after slash and then we execute.

// app.get('/:username/:id', (req, res) => {
//     let { username, id } = req.params;
//     res.send(req.params);

// })

// //query string

// app.get('/search', (req, res) => {
//     let query = req.query;
//     res.send(query);
// })


