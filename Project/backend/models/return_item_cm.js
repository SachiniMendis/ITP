const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const returnItemSchema = new Schema({
    customer_name : {
        type : String,
        required : true
    },
    
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    order_id : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    reason : {
        type : String,
        required : true
    }

    
})

const ReturnItem = mongoose.model("ReturnItem", returnItemSchema)

module.exports = ReturnItem;