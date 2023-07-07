
const Driverinfo = require("../models/Driverinfo_dm");



// const getAlldriverDetails= async(req,res,next)=>{

//     let driverinfo;
// try{
//     driverinfo= await Driverinfo_dm.find();
// }catch(err){
//     console.log (err);
// }
// if (!driverinfo){
//     return  res.status(404).json({massage:"No  found"});
// }
// return res.status(200).json({drivers});
// };

//get all
const getAlldriverDetails= async(req,res)=>{
    Driverinfo.find().then((drivers)=>{
        res.json(drivers)

    }).catch((err)=>{
        console.log(err);
    })
}

//getby
const getById= async(req,res,next)=>{
    const id= req.params.id;
    let driverdet;
    try{
        driverdet =await Driverinfo.findById(id);

    }catch (err){
        console.log(err);
    }
    if (!driverdet){
        return res.status(404).json({message:"NO FOUND"});
    }
    return res.status(200).json({driverdet});
};

//add
const adddriverDetails=async(req,res,next)=>{
    const{Drivername,Contact,LicenseNo,VehicleType,VehicleNo, LicenseImage,Password}=req.body;
    let driverdet;
    try{
        driverdet= new Driverinfo({
            Drivername,
            Contact,
            LicenseNo,
            VehicleType,
            VehicleNo,
            LicenseImage,
            Password
        });
        await driverdet.save();// database save funtion
    }catch(err){
        console.log(err);
    }
    
    if (!driverdet){
        return res.status(500).json({message:"Unable To Add"});
    }
    return res.status(201).json({status:"added"});
};




//update
const updatedriverDetails = async(req,res,next)=>{
    const id =req.params.id;
    const{Drivername,Contact,LicenseNo,VehicleType,VehicleNo, LicenseImage,Password}=req.body;
    let driverdet;
    try{
        driverdet= await Driverinfo.findByIdAndUpdate(id,{
            Drivername,
            Contact,
            LicenseNo,
            VehicleType,
            VehicleNo,
            LicenseImage,
            Password

        });
        driverdet = await Driverinfo.save();// database save funtion
    }
    catch(err){
        console.log(err);
    }
    if (!driverdet){
        return res.status(500).json({message:"Unable To Update By this Id"}); 
    }
    return res.status(201).json({driverdet});
};


//delete
const deletedriverDetails = async(req,res,next)=>{
    const id =req.params.id;
    let driverdet;
    try{
        driverdet= await Driverinfo.findByIdAndRemove(id);

    }catch(err){
        console.log(err);
    }
    if (!driverdet){
        return res.status(404).json({message:"Unable To delete By this Id"}); 
    }
    return res.status(200).json({message:' successfull deleted'});

};


//search driver

const searchdriver=async(req,res)=>{
    let searchKey=req.params.key;
     await Driverinfo.find({
         "$or":[
             {
                Drivername:{$regex:searchKey}
             },
             
         ]
     }).then((drivers)=>{
         
         res.json(drivers);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search Driver",error:err.message});
 
     })
 
 
 }

exports.getAlldriverDetails=getAlldriverDetails;
exports.adddriverDetails= adddriverDetails;
exports.getById=getById;
exports.updatedriverDetails=updatedriverDetails;
exports.deletedriverDetails=deletedriverDetails;
exports.searchdriver=searchdriver;
