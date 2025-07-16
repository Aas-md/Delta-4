const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log("server is listening on ", port);
})


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),

  ];
}


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Aaskhan9557@"
});


//home route
app.get('/', (req, res) => {

  let q = "select count(*) from user";

  try {

    connection.query(q, (err, result) => {

      if (err) throw err;
      const count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    })

  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }

})


// get users route

app.get('/users', (req, res) => {

  let q = "select * from user";

  try {

    connection.query(q, (err, users) => {
      if (err) throw err;

      res.render("showUsers.ejs", { users });
    })

  } catch (err) {

    console.log("error -> ", err);
    res.send("some thing went wrong");
  }


})

//edit user route

app.get('/users/:id/edit', (req, res) => {

  let { id } = req.params;

  let q = `select * from user where id='${id}'`;

  try {

    connection.query(q, (err, result) => {

      if (err) throw err;
      const user = result[0];
      res.render("edit.ejs",{user});
    })

  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }

})

//update route

app.patch('/users/:id',(req,res)=>{
  let { id } = req.params;
  let {username ,password} = req.body;

  let q = `select * from user where id='${id}'`;

  try {

    connection.query(q, (err, result) => {

      if (err) throw err;

      const user = result[0];
      
      let q2 = `update user set username='${username}' where id='${id}'`;
      connection.query(q2,(err,result)=>{
        if(err) throw err;
       res.redirect('/users');
      })
    })

  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
})




