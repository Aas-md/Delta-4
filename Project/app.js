const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

main().then(() => {
    console.log("connected to db")
}).catch((e) => {
    console.log(e)
})

async function main() {
    await mongoose.connect(mongoose_url);
}

app.listen(port, () => {
    console.log("App os listening on ", port)
})

app.get('/', (req, res) => {
    res.send("app is working fine");
})


// app.get('/testing',async (req,res)=>{

//     const listing = Listing({
//         title : "this is new location",
//         description :"this is onl;y for tesging",
//         price : 1200,
//         location : "goa",
//         country : "india"
//     })

//   await listing.save();
//   res.send("Listin added to db")

// })

// index route

app.get('/listings', async (req, res) => {
    const listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
})

//new Route

app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs');
})

// add route

app.post('/listings', wrapAsync(async (req, res, next) => {

    // let {title, description,image,price,location,country} = req.body;
 
        const listing = req.body.listing;
        const newListing = new Listing(listing);
        await newListing.save();
        res.redirect('/listings');
     
}));


//show route

app.get('/listings/:id', async (req, res) => {

    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });


})


//edit route

app.get('/listings/:id/edit', async (req, res) => {

    let { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing)
    res.render("listings/edit", { listing });

})

//Update route

app.put('/listings/:id', async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);

})


// Delete Route

app.delete('/listings/:id', async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listings');

})

// error handler

app.use((err, req, res, next) => {
    res.send("somethinf went wrong");
})
