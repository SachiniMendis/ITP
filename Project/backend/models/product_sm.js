const mongoose=require('mongoose');

const schema=mongoose.Schema;

const productSchema=new schema({

    supplier_id:{
        type:String,
        required:true
    },

    product_name :{
        type:String,
        required:true //value should be entered to continue(backend validation)
    },


    product_description:{
        type:String,
        required:true
    },

    product_price:{
        type:Number,
        required:true
    }

})

const Product=mongoose.model("sup_product",productSchema);

module.exports=Product;