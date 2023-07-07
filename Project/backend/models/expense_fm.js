const mongoose = require('mongoose');

const Schema = mongoose.Schema;  

const expenseSchema = new Schema({
    date:{
        type:String,
        required:true  
    },
    ename:{
        type:String,
        required:true
    },
    evalue:{
        type:Number,
        required:true
    }

})

const expense = mongoose.model("Expense",expenseSchema);  
module.exports=expense;                                          
