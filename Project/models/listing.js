const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    image: {
        type: String,
        default : "",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-view-of-the-golden-gate-bridge-from-the-beach-dL2du5DXHeA"
            : v
    },
    price: Number,
    location: String,
    country: String
});

const Listing = new mongoose.model("Listing", listingSchema);
module.exports = Listing;