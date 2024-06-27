const express = require('express');//include express module
const path = require('path');//include path module
const app = express();// express module object
require("./db/conn");//require connection file for db folder
// now acquairing the model
const Contact_us = require("./models/contact")
const Sign_up = require("./models/signup")
const Booking = require("./models/booking")
const static_path = path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.get('/', function (req, res) {
  res.send('Hello World qasim');
    
})

app.post('/contact', async (req, res) => {
  try {
      const fname = req.body.fname;
      const lname  = req.body.lname;
      const email = req.body.email;
      const subject = req.body.subject;
      const message = req.body.message;
      const ContactEntry = new Contact_us({
        fname:fname,
        lname:lname,
        email:email,
        subject:subject,
        message:message
      })
      const registered = await ContactEntry.save();
      res.status(200).sendFile('index.html');
      // res.sendFile('index.html');
    
  } catch (error) {
    res.status(400).send(error);
  }
    
})
app.post('/signup', async (req, res) => {
  try {
      const Sname = req.body.Sname;
      const Semail = req.body.Semail;
      const Spassword = req.body.Spassword;
      const SignUp = new Sign_up({
        Sname:Sname,
        Semail:Semail,
        Spassword:Spassword
      })
      const registered2 = await SignUp.save();
      res.status(201).render(index);
    // console.log(req.body.Semail);
    // res.send(req.body.Semail);
  } catch (error) {
    res.status(400).send(error);
  }
    
})
app.post('/booking', async (req, res) => {
  try {
      const Zcode = req.body.Zcode;
      const check_in = req.body.check_in;
      const check_out = req.body.check_out;
      const room = req.body.room;
      const adult = req.body.adult;
      const child = req.body.child;
      const eemail = req.body.eemail;
      const phone = req.body.phone;
      const Bookingu = new Booking({
        Zcode:Zcode,
        check_in:check_in,
        check_out:check_out,
        room:room,
        adult:adult,
        child:child,
        eemail:eemail,
        phone:phone
      })
      const registered3 = await Bookingu.save();
      res.status(201).render(index.html);
    // console.log(req.body.phone);
    // res.send(req.body.phone);
  } catch (error) {
    res.status(400).send(error);
  }
    
})
app.listen(3000)