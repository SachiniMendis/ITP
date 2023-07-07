const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
productCode :{
    type:String,
    required:false
},

customerId:{
    type:String,
    required:false
},
quantity:{
    type:Number,
    required:false
},
productName:{ 
    type:String,
    required:false
},
productDes:{
    type:String,
    required:false
},
image1Url:{
    type:String,
    required:false
},
unitPrice:{
    type:Number,
    required:false
},
title:{
    type:String,
    required:false
},
totalPrice:{
    type:Number,
    required:false
},

product_img_1_url:{
   
    type:String,
    required:[true,'image one  is required']

}

}) 

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;