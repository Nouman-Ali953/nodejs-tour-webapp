const mongoose = require("mongoose");
const book_us = new mongoose.Schema({
    Zcode:{
        type:String,
        required:true
    },
    check_in:{
        type:String,
        required:true
    },
    check_out:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    adult:{
        type:String,
        required:true
    },
    child:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        required:true
    }
})
// creating collection
const Book_us = new mongoose.model("Booking",book_us);
//exporting data collection
module.exports = Book_us;