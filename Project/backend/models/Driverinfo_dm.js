const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeliverySchema =new Schema({

    Drivername:{
        type :String,
        require:true,
    },

    Contact:{
        type:Number,
        require:true,
    },

    LicenseNo:{
        type:Number,
        require:true,
    },

    VehicleType:{
        type:String,
        require:true,
    },

    VehicleNo:{
        type:String,
        require:true,
    },

    LicenseImage:{
        type:String,
        require:true,
    },

    Password:{
        type:String,
        require:true,
    },
});

module.exports=mongoose.model("Driver",DeliverySchema);

