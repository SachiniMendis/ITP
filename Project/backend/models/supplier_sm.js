const mongoose=require('mongoose');

const schema=mongoose.Schema;

const supplierSchema=new schema({

    supplier_id :{
        type:String,
        //required:true //value should be entered to continue(backend validation)
        // validate:{
        //     validator:function (name){
        //         return /^[a-zA-Z]+$/.test(name);
        //     },
        //     message:"Only alphabetic characters allowed"
        // },
    },

    supplier_name :{
        type:String,
        //required:true //value should be entered to continue(backend validation)
    },

    supplier_companyName :{
        type:String,
        //required:true //value should be entered to continue(backend validation)
    },

    supplier_address:{
        type:String,
        //required:true
    },

    supplier_contactNo:{
        type:Number,
       // required:true
    },

    supplier_companyContactNo:{
        type:Number,
        //required:true
    },

    supplier_email :{
        type:String,
        //required:true //value should be entered to continue(backend validation)
    },

    supplier_type :{
        type:String,
       // required:true //value should be entered to continue(backend validation)
    },

})

const Supplier=mongoose.model("Supplier",supplierSchema);

module.exports=Supplier;