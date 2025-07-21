const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require('./review.js')

const listingSchema = Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    image: {
        type: String,
        default: "",
        set: (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : v
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            "type": mongoose.Schema.Types.ObjectId,
            "ref": "Review"
        }
    ]
});


listingSchema.post("findOneAndDelete", async (listing) => {

    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }

})


const Listing = new mongoose.model("Listing", listingSchema);
module.exports = Listing;