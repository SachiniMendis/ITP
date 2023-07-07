let driver = require("../models/Driverinfo_dm");

const driverLogin = async (req, res) => {

    let driver=await driver.findOne(req.body).select("-password");

    if(driverLogin){
     
        res.send(driver)

    }
    else{
      
        res.send({result:"Not user found..Please try again"})

    }


};


module.exports={
    driverLogin
}
