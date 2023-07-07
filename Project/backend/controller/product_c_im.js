let product=require("../models/product_m_im");


//add new product

const add_product=async(req,res)=>{ 


    

    const {product_code,product_name,product_title,product_description,unit_type,unit_price,product_img_1_url,
        product_img_2_url,status,hotdeals,featured,discount,category_code}=req.body;

    const new_product=new product({

        product_code,
        product_name,
        product_title,
        product_description,
        unit_type,
        unit_price,
        product_img_1_url,
        product_img_2_url,
        status,
        hotdeals,
        featured,
        discount,
        category_code
    })

    await new_product.save().then(()=>{
        res.json("New Product has been added succesfully..!");
    }).catch((err)=>{
        console.log(err);
        res.json("Somthing went wrong..");
    })

}


//fetch all product

const get_product=async(req,res)=>{

 await product.find().then((products)=>{
    res.json(products);
 }).catch((err)=>{

    console.log(err);
    res.json("somthing went wrong..");

 })

}

//update prodcut

const update_product=async(req,res)=>{


    let proId=req.params.id;
    const {product_code,product_name,product_title,product_description,unit_type,unit_price,product_img_1_url,
        product_img_2_url,status,hotdeals,featured,discount,stock,category_code}=req.body;
    const updateproduct={
        product_code,
        product_name,
        product_title,
        product_description,
        unit_type,
        unit_price,
        product_img_1_url,
        product_img_2_url,
        status,
        hotdeals,
        featured,
        discount,
        stock,
        category_code
    }

    const update=await product.findByIdAndUpdate(proId,updateproduct).then(()=>{

        res.status(200).send({status:"product has been succesfully Updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({ status: "Error with updating product", er: err.message });

    })

}

//delete product

const delete_product=async(req,res)=>{

    let proId=req.params.id;
    await product.findByIdAndDelete(proId).then(()=>{

        res.status(200).send({status:"product has been deleted succesfully..!"});

    }).catch((err)=>{

        res.status(500).send({status:"Error with delete product",error:err.message});

    })


}

//get one product

const get_one_product=async(req,res)=>{

    let proId=req.params.id;
    await product.findById(proId).then((products)=>{
        res.json(products);
    }).catch((err)=>{

        res.status(500).send({status:"Error with get product",error:err.message});

    })

}

//get one product using product code

const get_one_product_code=async(req,res)=>{

   
    let proCode=req.params.pcode;
    await product.find({product_code:proCode}).then((products)=>{
        res.json(products);
    }).catch((err)=>{

        res.status(500).send({status:"Error with get product",error:err.message});

    })
   


}
const get_one_product_code_one=async(req,res)=>{

   
    let proCode=req.params.pcode;
    await product.find({product_code:proCode}).then((products)=>{
        if (products) {
            return res.json({ exists: true });
          } else {
            return res.json({ exists: false });
          }
    }).catch((err)=>{

        res.status(500).send({status:"Error with get product",error:err.message});

    })
   


}




//update one product using product code


const update_product_code=async(req,res)=>{


    let procode=req.params.pcode;
    const {product_code,product_name,product_title,product_description,unit_type,unit_price,product_img_1_url,
        product_img_2_url,status,hotdeals,featured,discount,stock,category_code}=req.body;
    const updateproduct={
        product_code,
        product_name,
        product_title,
        product_description,
        unit_type,
        unit_price,
        product_img_1_url,
        product_img_2_url,
        status,
        hotdeals,
        featured,
        discount,
        stock,
        category_code
    }

    const filter = { product_code:procode};


    const update=await product.findOneAndUpdate(filter,updateproduct).then(()=>{

        res.status(200).send({status:"product has been succesfully Updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({ status: "Error with updating product", er: err.message });

    })

}



//search product inventory side

const search_product_im=async(req,res)=>{
   let searchKey=req.params.key;
    await product.find({
        "$or":[
            {
                product_code:{$regex:searchKey}
            },
            {
                product_name:{$regex:searchKey}
            }
        ]
    }).then((products)=>{
        
        res.json(products);
    }).catch((err)=>{
        res.status(500).send({status:"Error with Search Product",error:err.message});

    })


}

module.exports={

    add_product,
    get_product,
    update_product,
    delete_product,
    get_one_product,
    get_one_product_code,
    search_product_im,
    update_product_code,
    get_one_product_code_one
    
}

