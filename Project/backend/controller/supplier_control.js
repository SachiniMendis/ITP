let Supplier=require("../models/supplier_sm");


//create
// when we call this url the following route will get executed http://Localhost:8070/supplier/add
//when we insert data we use post method

const add_supplier=async(req,res) =>
{
        //getting the inserted values from frontend using request body supplier_id
        const supplier_id=req.body.supplier_id;
        const supplier_name=req.body.supplier_name;
        const supplier_companyName=req.body.supplier_companyName;
        const supplier_address=req.body.supplier_address;
        const supplier_contactNo=Number(req.body.supplier_contactNo);
        const supplier_companyContactNo=Number(req.body.supplier_companyContactNo);
        const supplier_email=req.body.supplier_email;
        const supplier_type=req.body.supplier_type;

        //getting data into an object and passing to the database
        const newSupplier=new Supplier({
    
            supplier_id,
            supplier_name,
            supplier_companyName,
            supplier_address,
            supplier_contactNo,
            supplier_companyContactNo,
            supplier_email,
            supplier_type
        })
    
        //javascript promise (more similar to if else in java)
        newSupplier.save().then(()=>{
            res.json("Supplier added")//passing the message to the frondend in json format
        }).catch((err)=>{
            console.log(err);//similar to exception handling
        })//pass the obj to database
}


//retreive
//body to execute when this backend url is called http://LocalHost:8070/supplier/
//using get method to display the output(when we fetch data we use get method)


const get_supplier=async(req,res) =>
{
      //body
      Supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=>{
        console.log(err);
    })
}


//update
//when updating http://LocalHost:8070/supplier/update/5f737hujnjwdcszhg
//must use the ': <anyname>'
//put method is used get data and update .can use post method as well
//always asynchronous function is waiting for a promise req

const update_supplier=async(req,res) =>
{
    let userId=req.params.id;//id must be the same one which we declared in the router ':id"
    //const name=req.body.name;
    //using tree structure

    const{supplier_id,supplier_name,supplier_companyName,supplier_address,supplier_contactNo,supplier_companyContactNo,supplier_email,supplier_type}=req.body;

    //creating an obj to update the variables
    const updateSupplier= {
        supplier_id,
        supplier_name,
        supplier_companyName,
        supplier_address,
        supplier_contactNo,
        supplier_companyContactNo,
        supplier_email,
        supplier_type
    }

    //await-wait until a promise req occurs
    const update=await Supplier.findByIdAndUpdate(userId,updateSupplier).then(()=>{

        res.status(200).send({status:"User updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
}

//delete
//when deleting http://LocalHost:8070/supplier/delete/5f737hujnjwdcszhg

const delete_supplier=async(req,res) =>
{
    let userId=req.params.id;

    await Supplier.findByIdAndDelete(userId).then(()=> {
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});
    })
}


// how to get details relevant to a specific supplier
const getOne_supplier=async(req,res) =>
{
    let userId=req.params.id;
   const user= await Supplier.findById(userId).then((supplier)=>{
    res.json(supplier)

    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
}

//search supplier


const search_supplier=async(req,res)=>{
    let searchKey=req.params.key;
     await Supplier.find({
         "$or":[
             {
                supplier_name:{$regex:searchKey}
             },
             {
                supplier_id:{$regex:searchKey}
             },
             
         ]
     }).then((suppliers)=>{
         
         res.json(suppliers);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search Product",error:err.message});
 
     })
 
 
 }

module.exports={
    add_supplier,
    get_supplier,
    update_supplier,
    delete_supplier,
    getOne_supplier,
    search_supplier
};