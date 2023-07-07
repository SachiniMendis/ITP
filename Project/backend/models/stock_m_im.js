const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const stockSchema=new Schema({


    date:{
        type:Date,
        required:[true,'stock adding date is required']
    },
    stock_location:{
        type:String,
        required:[true,'stock location is required']
    },
    quantity:{
        type:Number,
        required:[true,'quantity is required'],
        min: [0, 'Minimun quantity is zero']


    },
    expired_date:{
        type:Date,
        required:[false,'expired date is not required']
    },
    product_code:{
        type:String,
        required:[true,'product code is required']
    }


})

const stock=mongoose.model("stock",stockSchema);
module.exports=stock;