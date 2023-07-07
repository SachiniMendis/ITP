const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const customerSchema = new Schema({

        first_name : {
            type : String,
            required : [true, "Name is required"],
            validate: {
                validator: function (name) {
                  return /^[a-zA-Z]+$/.test(name);
                },
                message: "Only alphabetic characters allowed.",
              },
        },
        last_name : {
            type : String,
            required : [true, "Name is required"],
            validate: {
                validator: function (name) {
                  return /^[a-zA-Z]+$/.test(name);
                },
                message: "Only alphabetic characters allowed.",
              },
        },
        email : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : true
        },
        province : {
            type : String
            
        },
        city : {
            type : String
            
        },
        username : {
            type : String
            
        },
        password : {
            type : String
            
        },
        address : {
            type : String
            
        },
        profile_pic : {
            type : String,
            
        },
        gender : {
            type : String
        }
        

})

const Customer = mongoose.model("Customer", customerSchema)

module.exports = Customer;