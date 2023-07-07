const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({

    product_code:{
        type:String,
        required:[true,'Product Code is Required']

    },
    product_name:{
        type:String,
        required:[true,'Product name is Required']
    },
    product_description:{
        type:String,
        required:[true,'Product description is Required']
    },
    product_title:{

        type:String,
        required:[true,'product title is required']
    },
    unit_price:{
        type:Number,
        required:[true,'unit price  is required']

    },
    unit_type:{
        type:String,
        required:[true,'unit type  is required']
    },

    product_img_1_url:{
       
        type:String,
        required:[true,'image one  is required']

    },
    product_img_2_url:{
       
        type:String,
        required:[true,'image two  is required']

    },
    status:{
        type:Boolean,
        required:[true,'status is required']
 
     },
     hotdeals:{
        type:Boolean,
        required:false,
        default:false
     },
     featured:{
        type:Boolean,
        required:false,
        default:false
     },
     discount:{
        type:Number,
        required:false,
        default:0,
        min: [0, 'Minimun discount is zero']
     },
     stock:{
        type:Number,
        required:false,
        default:0,
        min: [0, 'Minimun quantity is zero']
     },
     category_code:{

        type:String,
        required:[true,'category is required']
        
     }

      
})

const product=mongoose.model("product",productSchema);
module.exports=product;