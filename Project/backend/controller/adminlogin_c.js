let Employee = require("../models/employees_em");

const adminLogin = async (req, res) => {

    let admin=await Employee.findOne(req.body).select("-password");

    if(admin){
     
        res.send(admin)

    }
    else{
      
        res.send({result:"Not user found..Please try again"})

    }


};


module.exports={
    adminLogin
}
