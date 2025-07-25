const Listing = require("../models/listing.js");



module.exports.index = async (req, res) => {
    const listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
}

module.exports.renderNewForm = (req, res) => {

    res.render('listings/new.ejs');

}

module.exports.addNewListing =  async (req, res, next) => {

    // let {title, description,image,price,location,country} = req.body;
    let url = req.file.path;
    let filename = req.file.filename;
    const listing = req.body.listing;
    const newListing = new Listing(listing);
    newListing.image = {url,filename};
    newListing.owner = req.user._id
    await newListing.save();
    req.flash("success", "New Listing added");
    res.redirect('/listings');

}

module.exports.showListing =  async (req, res) => {

    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        }).populate('owner');
    if (listing)
        res.render("listings/show.ejs", { listing });
    else {
        req.flash("error", "The listing is exist");
        res.redirect('/listings')
    }
}

module.exports.editListing =  async (req, res) => {

    let { id } = req.params;
    const listing = await Listing.findById(id);

    res.render("listings/edit", { listing });

}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Edited Successfuly");
    res.redirect(`/listings/${id}`);

}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted Successfuly");
    res.redirect('/listings');

}