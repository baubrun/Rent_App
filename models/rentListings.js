const mongoose = require("mongoose")
const Schema = mongoose.Schema


const RentSchema = new Schema({

    name: String,
    email: String,
    phone: String,
    address: String,
    latitude: {type: Number},
    longitude: {type: Number}

})

module.exports = mongoose.model("RentListings", RentSchema)