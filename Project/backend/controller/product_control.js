let Product=require("../models/product_sm");


//create
// when we call this url the following route will get executed http://Localhost:8070/product/add
//when we insert data we use post method

const add_product=async(req,res) =>
{
        //getting the inserted values from frontend using request body 
        const supplier_id=req.body.supplier_id;
        const product_name=req.body.product_name;
        const product_description=req.body.product_description;
        const product_price=req.body.product_price;

        //getting data into an object and passing to the database
        const newProduct=new Product({
    
            supplier_id,
            product_name,
            product_description,
            product_price
            
           
        })
    
        //javascript promise (more similar to if else in java)
        newProduct.save().then(()=>{
            res.json("Product added")//passing the message to the frondend in json format
        }).catch((err)=>{
            console.log(err);//similar to exception handling
        })//pass the obj to database
}


//retreive
//body to execute when this backend url is called http://LocalHost:8070/product/
//using get method to display the output(when we fetch data we use get method)


const get_product=async(req,res) =>
{
      //body
      Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err);
    })
}


//update
//when updating http://LocalHost:8070/product/update/5f737hujnjwdcszhg
//must use the ': <anyname>'
//put method is used get data and update .can use post method as well
//always asynchronous function is waiting for a promise req

const update_product=async(req,res) =>
{
    let userId=req.params.id;//id must be the same one which we declared in the router ':id"
    //const name=req.body.name;
    //using tree structure

    const{supplier_id,product_name,product_description,product_price}=req.body;

    //creating an obj to update the variables
    const updateProduct= {
        supplier_id,
        product_name,
        product_description,
        product_price,
    }

    //await-wait until a promise req occurs
    const update=await Product.findByIdAndUpdate(userId,updateProduct).then(()=>{

        res.status(200).send({status:"Product updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
}

//delete
//when deleting http://LocalHost:8070/product/delete/5f737hujnjwdcszhg

const delete_product=async(req,res) =>
{
    let userId=req.params.id;

    await Product.findByIdAndDelete(userId).then(()=> {
        res.status(200).send({status:"product deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete product",error:err.message});
    })
}


// how to get details relevant to a specific product
const getOne_product=async(req,res) =>
{
    let userId=req.params.id;
    const user= await Product.find({supplier_id:userId}).then((product)=>{
        res.json(product);
     }).catch(()=>{
         console.log(err.message);
         res.status(500).send({status: "Error with get product",error:err.message});
     })
}

module.exports={
    add_product,
    get_product,
    update_product,
    delete_product,
    getOne_product
};
