const MemberAttendence = require("../models/Attendance_em");

const addMemberAttendence = async (req, res, next) =>{
    const{nic,name,time,date,position} = req.body;
    let memberAttendence;
    try{
        memberAttendence = new MemberAttendence({
            nic,
            name,
            time,
            date,
            position
        });
     await memberAttendence.save();
    }catch (err) {
        console.log(err);
    }
    if (!memberAttendence){
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ imessage: "Member Added" });
};

const getAllMemberAttendence = async (req, res, next) => {
    let memberAttendence;
    try{
        memberAttendence = await MemberAttendence.find();
    } catch(err) {
        console.log(err);
    }

    if(!memberAttendence){
        return res.status(404).json({message:"NO staff members found"})
    }
    return res.json(memberAttendence);
};

const deleteAllMemberAttendence = async (req, res, next) => {
    let memberAttendence;
    try{
        memberAttendence = await MemberAttendence.deleteMany({})
    } catch(err) {
        console.log(err);
    }

    if(!memberAttendence){
        return res.status(404).json({message:"NO staff members found"})
    }
    return res.status(200).json({memberAttendence});
};

exports.addMemberAttendence = addMemberAttendence
exports.getAllMemberAttendence = getAllMemberAttendence
exports.deleteAllMemberAttendence = deleteAllMemberAttendence