const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const employeeSchema = new Schema({

    employee_name : {
        type : String,
        required :false
    },

    employee_id : {
        type : String,
        required : false
    },

    nic_number : {
        type : String,
        required : false
    },

    position : {
        type : String,
        required : false
    },

    registered_date :{
        type : String,
        required : false
    },

    Address : {
        type : String,
        required : false
    },

    mobile_number : {
        type : String,
        required : false
    },

    user_name : {
        type : String,
        required : false
    },

    password : {
        type : String,
        required : false
    }



    // no_of_day_worked : {
    //     type : Number,
    //     required : true
    // }

    
    
})
const employee = mongoose.model("Employee",employeeSchema);
module.exports = employee;