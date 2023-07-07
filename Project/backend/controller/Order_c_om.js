                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              let Order = require("../models/Order_m_om");
//crud add

const addOrder = async(req,res) => {
    const productCode=req.body.productCode;
    const customerId= req.body.customerId ;
    const quantity=req.body.quantity;
    const totalPrice= req.body.totalPrice;
    const status= req.body.status;
    const productName= req.body.productName;
    const unitPrice= req.body.unitPrice;
    const address= req.body.address;
    const customerName= req.body.customerName;
    const contactNumber= req.body.contactNumber;
    const orderDate= req.body.orderDate;
    const driverId= req.body.driverId;
    const driverName= req.body.driverName;

  
    

    
    
   
    const newitem = new Order({
        productCode,customerId,quantity,totalPrice,productName,unitPrice,status,address,customerName,contactNumber,orderDate,driverId,driverName
    })
//then is java script promise
    newitem.save().then(() => {
        res.json("item Added");
    }).catch((err) => {
        console.log(err);
    })
}

const getOrders = async(req,res) => {
    Order.find().then((Order) => {
        res.json(Order)
    }).catch((err) => {
        console.log(err);
    })
}

//fetch all orders

const getAllOrders=async(req,res)=>{

    await Order.find().then((Order)=>{
       res.json(Order);
    }).catch((err)=>{
   
       console.log(err);
       res.json("somthing went wrong..");
   
    })
   
   }
//update
const deleteOrder=async(req,res)=>{

    let orderId=req.params.id;
//    let customerId=req.customerId;
    await Order.findByIdAndDelete(orderId).then(()=>{

        res.status(200).send({status:"product has been deleted succesfully..!"});

    }).catch((err)=>{

        res.status(500).send({status:"Error with delete product",error:err.message});

    })


}
//ss
const UpdateStatus =async(req,res)=>{


    let proId=req.params.id;
    const {productCode,customerId,quantity,totalPrice,productName,unitPrice,status,address,driverId,contactNumber,driverName,customerName}=req.body;
    const UpdateStatus={
        productCode,
        customerId,
        quantity,
        totalPrice,
        address,
        productName,
        unitPrice,
        status,
        driverId,
        contactNumber,
        driverName,
        customerName
        
    }

    const update=await Order.findByIdAndUpdate(proId,UpdateStatus).then(()=>{

        res.status(200).send({status:"product has been succesfully Updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({ status: "Error with updating product", er: err.message });

    })

}


const search_order_om=async(req,res)=>{
    let searchKey=req.params.key;
     await Order.find({
         "$or":[
             {
                 customerId:{$regex:searchKey}
             },
             {
                 productName:{$regex:searchKey}
             }
         ]
     }).then((orders)=>{
         
         res.json(orders);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search orders",error:err.message});
 
     })
 
 
 }

 

module.exports  ={
    addOrder,
    getOrders,
    UpdateStatus,
    search_order_om,
    deleteOrder,getAllOrders

};