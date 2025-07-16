const mongoose = require("mongoose")

main().then((res) => {

    console.log("connection successful");

}).catch((e) => {
    console.log("error", e);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
       
    },
    price: {
        type: Number,
         min: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    subject: {
        type: String,
        enum: ["Math", "Physics", "Chemistry"]
    }

})

const Book = new mongoose.model("Book", bookSchema)

// let book = new Book({
//     title: "Math",
//     author: "RD Sharma",
//     price: 1200,
//     subject: "Math"

// })
// book.save()
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })


//validation will not allowed

// Book.updateOne({ subject: "Math" }, { price: -500 })
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

//runValidator

Book.updateOne({ price : 1200}, { price: -500 },{runValidators : true})//not alllwoing
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

