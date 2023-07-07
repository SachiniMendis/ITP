    let Cart = require("../models/CartPage_m_om");

//Add item to cart

const addItemToCart = async(req,res) => {
    const productCode=req.body.productCode;
    const customerId= req.body.customerId ;
    const quantity=req.body.quantity;
    const productName= req.body.productName;
    const productDes= req.body.productDes;
    const image1Url= req.body.image1Url;
    const unitPrice= req.body.unitPrice;
    const title=req.body.title;
    const totalPrice=req.body.totalPrice;
    const product_img_1_url=req.body.product_img_1_url;
      
    const newitem = new Cart({
        productCode,customerId,quantity,productDes,productName,image1Url,unitPrice,title,product_img_1_url
    })
//then is java script promise
    newitem.save().then(() => {
        res.json("item Added");
    }).catch((err) => {
        console.log(err);
    })
}


//delete product

const deleteItem=async(req,res)=>{

    let proId=req.params.id;
//    let customerId=req.customerId;
    await Cart.findByIdAndDelete(proId).then(()=>{

        res.status(200).send({status:"product has been deleted succesfully..!"});

    }).catch((err)=>{

        res.status(500).send({status:"Error with delete product",error:err.message});

    })


}
// delete all prpducts
const deleteAllItem=async(req,res)=>{

    let customerId = req.params.customerId;
    try {
        // Find the cart based on the customer ID and delete it
        const result = await Cart.deleteMany({ customerId: customerId });
    
        if (result.deletedCount > 0) {
          res.status(200).send({ status: "Items have been deleted successfully." });
        } else {
          res.status(404).send({ status: "No items found for the customer ID." });
        }
      } catch (err) {
        res.status(500).send({ status: "Error with deleting items", error: err.message });
      }


}

//get products in relevant customer
const getCartItems=async(req,res)=>{

   
    let proId=req.params.customerId;
    await Cart.find({customerId:proId}).then((Cart)=>{
        res.json(Cart);
    }).catch((err)=>{

        res.status(500).send({status:"Error with get product",error:err.message});

    })
   


}
//update
const updateCart =async(req,res)=>{


    let proId=req.params.id;
  

    let quantity=req.body.quantity;
    
    
    const updateitem ={
        quantity 
    }

    const update=await Cart.findByIdAndUpdate(proId,updateitem).then(()=>{

        res.status(200).send({status:"product has been succesfully Updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({ status: "Error with updating product", er: err.message });

    })

}


module.exports  ={
    addItemToCart,
    deleteItem,
    getCartItems,
    updateCart,
    deleteAllItem
};