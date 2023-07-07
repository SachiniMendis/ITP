const Jwt = require("jsonwebtoken");
const jwtKey = "madsajidjdaidaaid"
let Customer = require("../models/Customer_cm");

//Add new Customer
const addCustomer = async(req,res) => {
    
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const province = req.body.province;
    const city = req.body.city;
    const username = req.body.username;
    const password = req.body.password;
    const address = req.body.address;
    const profile_pic = req.body.profile_pic;
    const gender = req.body.gender;

    const newCustomer = new Customer({

        first_name,
        last_name,
        email,
        phone,
        province,
        city,
        username,
        password,
        address,
        profile_pic,
        gender

    })
//then is java script promise
    newCustomer.save().then(() => {
        res.json("Customer Added");
    }).catch((err) => {
        console.log(err);
    })
}

//display all Customers
const getCustomer = async(req,res) => {
    Customer.find().then((customers) => {
        res.json(customers)
    }).catch((err) => {
        console.log(err);
    })
}

//update customer using id
const updateCustomer = async(req,res) => {
    let cusId = req.params.id; //same to url id for fetch
    const { first_name,last_name,email,phone,province,city,username,password,address,profile_pic,gender } = req.body;
    const updateCustomer = {
        first_name,
        last_name,
        email,
        phone,
        province,
        city,
        username,
        password,
        address,
        profile_pic,
        gender
    }

    const update = await Customer.findByIdAndUpdate(cusId, updateCustomer).then(() => {
        res.status(200).send({status: "user Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating customer",error:err.message })
    })
    //await mean please wait update complete
}


//delete customer using id
const deleteCustomer = async(req,res) => {
    let cusId = req.params.id;
    await Customer.findByIdAndDelete(cusId).then(() => {
        res.status(200).send({status: "User Deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with delete customer",error:err.message})
    })
}

//display one customer using id

const getOneCustomer = async(req,res) => {
    let cusId = req.params.id;
    await Customer.findById(cusId).then((customers) => {
        res.json(customers)
    }).catch((err) => {
        res.status(500).send({status: "Error with get user",error: err.message});
    })
}

//update customer address using id
const updateCustomerAddress = async(req,res) => {
    let cusId = req.params.id; //same to url id for fetch
    const { address } = req.body;
    const updateCustomerAddress = {
        address
    }

    const update = await Customer.findByIdAndUpdate(cusId, updateCustomerAddress).then(() => {
        res.status(200).send({status: "user Updated"})
    }) .catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating customer",error:err.message })
    })
    //await mean please wait update complete
}

//search
const search_customer_cm=async(req,res)=>{
    let searchKey=req.params.key;
     await Customer.find({
         "$or":[
             {
                 first_name:{$regex:searchKey}
             },
             {
                 last_name:{$regex:searchKey}
             },
             {
                email : {$regex:searchKey}
             }
         ]
     }).then((customer)=>{
         
         res.json(customer);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search customer",error:err.message});
 
     })
 
 
 }


 const customerLogin = async (req, res) => {
    let customer = await Customer.findOne(req.body).select("-password");
  
    if (customer) {
      
      Jwt.sign({ customer }, jwtKey, { expiresIn: "2h" }, (err,token) => {
          if(err){
  
              res.send({ result: "Not user found..Please try again" });
  
  
  
          }
          res.send({customer,auth:token})
      });
  
  } else {
      res.send({ result: "Not user found..Please try again" });
    }
  };


module.exports = {
    addCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
    getOneCustomer,
    updateCustomerAddress,
    search_customer_cm,
    customerLogin
};