const MongoClient = require("mongodb").MongoClient
const express = require("express")
const app = express()
const result = require("dotenv").config()

const listingsData = require("./assets/listingsData.json")
const mongoose = require("mongoose")

const RentListing = require("./models/rentListings")

/*===============
DB
================*/

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Rent-Listings"
}

mongoose.connect(process.env.DB_URI, options)

const db = mongoose.connection
db.on("error", err => console.log(err))
db.once("open", () => console.log("\nMongoose connected to DB!\n"))


/*===============
Middleware
================*/

app.use(express.json())


/*===============
Helper functions
================*/

// const makeData = data => {
//     data.forEach( async d =>
//         {
//             const rentlist = new RentListing({
//                 name: d.name,
//                 email: d.email,
//                 phone: d.phone,
//                 address: d.address,
//                 latitude: d.latitude,
//                 longitude: d.longitude
//             })
//             await rentlist.save(err => {
//                 if (err) {
//                     console.error(err)
//                 }
//             })
//         }
//     )
// }




/*===============
Get
================*/



app.get("/listings", (req, res) => {
    console.log("in /listings")
    const listings = RentListing.find({}, err =>{
        if (err){
            console.error(err)
            return res.json({success: false})
        }
    })
    return res.json({success: true, listings: listings})
})




/*===============
Post
================*/





/*===============
Server
================*/



const port = 4000

app.listen(port, () => {
    console.log("\nServer running on port:", port)
})