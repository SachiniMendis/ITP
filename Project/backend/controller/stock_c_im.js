let stock=require("../models/stock_m_im");

//add new stock

const add_stock=async(req,res)=>{

    const {date,stock_location,quantity,expired_date,product_code}=req.body;

    const new_stock=new stock({
        date,
        stock_location,
        quantity,
        expired_date,
        product_code


    })
    await new_stock.save().then(()=>{
        res.json("new stock added succesfully");
    }).catch((err)=>{
        console.log(err);
        res.join("somthing went wrong..");
    })
}

//get stock

const get_stock=async(req,res)=>{

    await stock.find().then((stocks)=>{
        res.json(stocks);
    }).catch((err)=>{
        console.log(err);
        res.json("somthing went wrong..");
    })
}

//update stock

const update_stock=async(req,res)=>{

    let stockId=req.params.id;
    const {date,stock_location,quantity,expired_date,product_code}=req.body;
    const update_stock={
        date,
        stock_location,
        quantity,
        expired_date,
        product_code


    }

    const update=await stock.findByIdAndUpdate(stockId,update_stock).then(()=>{

        res.status(200).send({status:"stock has been updated succesfully"})


    }).catch((err)=>{

        console.log(err);
        res.status(500).send({ status: "Error with updating stock", er: err.message });

    })




}

//delete stock

const delete_stock=async(req,res)=>{

    let stockId=req.params.id;
    await stock.findByIdAndDelete(stockId).then(()=>{
        res.status(200).send({status:"stock has been deleted succesfully..!"});

    }).catch((err)=>{
        
        res.status(500).send({status:"Error with delete stock",error:err.message});

    })
}


//get one stock

const get_one_stock=async(req,res)=>{

    let stockId=req.params.id;
    await stock.findById(stockId).then((stocks)=>{
        res.json(stocks);
    }).catch((err)=>{
        res.status(500).send({status:"Error with get stock",error:err.message});

    })

}

//get stock according to product
const get_product_stock=async(req,res)=>{

    let proCode=req.params.pCode;
    await stock.find({product_code:proCode}).then((stocks)=>{
        res.json(stocks);
    }).catch((err)=>{
        res.status(500).send({status:"Error with get product stock",error:err.message});

    })
}

module.exports={
    add_stock,
    get_stock,
    update_stock,
    delete_stock,
    get_one_stock,
    get_product_stock
}