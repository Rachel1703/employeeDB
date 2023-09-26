const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required : [true , "Please enter employee name"]
    },
    email:{
        type: String,
        required : [true , "Please enter employee email"]
    },
    phone:{
        type: String,
        required : [true , "Please enter employee contact number"]
    },
    department:{
        type: String,
        required : [true , "Please enter employee department"]
    },
    gender:{
        type: String,
        required : [true , "Please enter employee gender"]
    }

}, {
    timestamps:true,
})

module.exports = mongoose.model("employee",employeeSchema);