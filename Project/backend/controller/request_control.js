let Request = require("../models/request_pm");

//create request
const addRequest = async(req,res)=>{

    const requestId = req.body.requestId;
    const des = req.body.des;
    const date = req.body.date;
    const qty = req.body.qty;
    const sup_info = req.body.sup_info;
    const stat = (req.body.stat);
    const supplier_id = req.body.supplier_id;
    const product_price = req.body.product_price;
    const total_price = req.body.total_price;
    



    const newRequest = new Request({
        requestId,
        des,
        date,
        qty,
        sup_info,
        stat,
        supplier_id,
        product_price,
        total_price

    })

    newRequest.save().then(()=>{
        res.json("Request Added")
    }).catch((err)=>{
        console.log(err);
    })
}

//view requests
const getRequest = async(req,res)=>{
    Request.find().then((requests)=>{
        res.json(requests)
    }).catch((err)=>{
        console.log(err)
    })

}

//update
//http//localhost:8070/request/update/<id>
const updateRequest = async (req,res) =>{
    let reqId = req.params.id;

    const {requestId, des, date, qty, sup_info, stat, supplier_id, product_price, total_price} = req.body;


    const updateRequest = {
        requestId,
        des,
        date,
        qty,
        sup_info,
        stat,
        supplier_id,
        product_price,
        total_price
    }

    const update = await Request.findByIdAndUpdate(reqId, updateRequest).then(() =>{
        res.status(200).send({status: "Request updated"})
 }).catch((err) =>{
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
 })
}

//delete
const deleteRequest = async (req,res) =>{
    let id = req.params.id;
    
    await Request.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Request Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete request", error: err.message});
    })

}

//single view
const getOneRequest = async(req, res)=>{
    let reqId = req.params.id;
    const user = await Request.findById(reqId).then((requests) =>{
        res.json(requests)
    }).catch(() => {
        console.log(err.message);
        res.status(500). send({status: "Error with get user", error: err.message});
    })
}

//Search Request
const searchRequest=async(req,res)=>{
    let searchKey=req.params.key;
     await Request.find({
         "$or":[
             {
                 requestId:{$regex:searchKey}
             },
             {
                date:{$regex:searchKey}
             }

            
         ]
     }).then((requests)=>{
         
         res.json(requests);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search Request",error:err.message});
 
     })
 
 
 }

module.exports = {
    addRequest,
    getRequest,
    updateRequest,
    deleteRequest,
    getOneRequest,
    searchRequest
};