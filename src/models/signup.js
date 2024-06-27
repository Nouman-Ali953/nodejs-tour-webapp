const mongoose = require("mongoose");
const sign_up = new mongoose.Schema({
    Sname:{
        type:String,
        required:true
    },
    Semail:{
        type:String,
        required:true
    },
    Spassword:{
        type:String,
        required:true
    }
})
// creating collection
const Sign_up = new mongoose.model("Signup",sign_up);
//exporting data collection
module.exports = Sign_up;