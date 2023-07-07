const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
productCode :{
    type:String,
   
},

customerId:{
    type:String,
    
},
quantity:{
    type:Number,
    
},
totalPrice:{
    type:Number,
    
},

productName:{
    type:String,
    
},
unitPrice:{
    type:Number,
    
},
status:{
    type:String,
    default:"pending"
    
},
customerName:{
    type:String,
    default:"no"
},
address:{
    type:String,
    default:"no"
},

contactNumber:{
    type:String,
    default:"no"
},

orderDate:{
    type:String,
    default:"no"
},


driverId:{
    type:String,
    default:"no"
},driverName:{
    type:String,
    default:"Not Assign"

}

})

const Order = mongoose.model("order",OrderSchema);

module.exports = Order;