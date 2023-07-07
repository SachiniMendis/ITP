let ReturnItem = require("../models/return_item_cm");

//Add new Return_Item
const AddReturn = async(req,res) => {
    const customer_name = req.body.customer_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const order_id = req.body.order_id;
    const address = req.body.address;
    const reason = req.body.reason;

    const newReturnItem = new ReturnItem({
        customer_name,
        email,
        phone,
        order_id,
        address,
        reason
    })

    //then is java script promise
    newReturnItem.save().then(() => {
        res.json("Customer Added");
    }).catch((err) => {
        console.log(err);
    })
}
//display all return items
    const getReturnItem = async(req,res) => {
        ReturnItem.find().then((ReturnItem) => {
            res.json(ReturnItem)
        }).catch((err) => {
            console.log(err);
        })
    }

    //update customer using id
    const updateReturnItem = async(req,res) => {
        let retId = req.params.id; //same to url id for fetch
        const { customer_name, email, phone, order_id, address, reason } = req.body;
        const updateReturnItem = {
            customer_name,
            email,
            phone,
            order_id,
            address,
            reason
        }

        const update = await ReturnItem.findByIdAndUpdate(retId, updateReturnItem).then(() => {
            res.status(200).send({status: "Form Update"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating",error:err.message})
        })
    

    }

    //delete return item form using id
    const deleteReturnItem = async(req,res) => {
        let retId = req.params.id;
        await ReturnItem.findByIdAndDelete(retId).then(() => {
            res.status(200).send({status: "Form Deleted"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with delete",error:err.message})
        })
    }

    //display one return item form using id

    const getOneReturnItem = async(req,res) => {
        let retemail = req.params.email;
        await ReturnItem.find({email:retemail}).then((ReturnItem) => {
            res.json(ReturnItem)
        }).catch((err) => {
            console.log(err);
        })
    }






module.exports = {
    AddReturn,
    getReturnItem,
    updateReturnItem,
    deleteReturnItem,
    getOneReturnItem
};