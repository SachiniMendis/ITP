const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AttendenceSchema = new Schema({
    
    nic:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
    },
    
    position:{
        type:String,
        required:true
    }
    
});

const Attendence = mongoose.model("Attendence", AttendenceSchema);

module.exports = Attendence;


