const mongoose = require("mongoose");
const contact_us = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
// creating collection
const Contact_us = new mongoose.model("Contactus",contact_us);
//exporting data collection
module.exports = Contact_us;