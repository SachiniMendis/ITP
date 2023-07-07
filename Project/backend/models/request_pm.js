const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({

    requestId:{
        type : String,
        required: true
    },

    des:{
        type : String,
        
    },

    date:{
        type: String,
        
    },

    qty:{
        type : Number,
        
    },
    sup_info:{
        type : String,
        
    },

    sup_info:{
        type : String,
    },

    stat:{
        type : String,
        
    },

    supplier_id:{
        type : String,
        //default:45324

        default:"Not assigned"

        
    },

    product_price:{
        type :Number,
       //default:0
        
    },
   
total_price:{
        type : Number,
        default:0
        
        
    }
    
    
    
})

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
