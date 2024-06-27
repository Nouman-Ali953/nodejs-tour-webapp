const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/Project2", { useNewUrlParser: true }).then(() => {
    console.log(`connection Successfull`);
}).catch((e) => {
    console.log(e);
})
