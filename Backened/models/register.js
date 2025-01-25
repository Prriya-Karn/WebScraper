const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const registModel = new mongoose.model("registration",registrationSchema);
module.exports = registModel;
