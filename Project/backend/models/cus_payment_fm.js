const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    firstName:{
        type:String,
        required:true  
    },
    lastName:{
        type:String,
        required:true
    },
    cardType:{
        type:String,
        required:true
    },
    cardNumber:{
        type:Number,
        required:true
    },

    exYear:{
        type:Number,
        required:true
    },

    exMonth:{
        type:Number,
        required:true
    },

    CVN:{
        type:Number,
        required:true
    }



})

const payment = mongoose.model("Cus_payment",paymentSchema);  
module.exports=payment;