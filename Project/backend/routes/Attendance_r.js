const express = require("express");
const router = express.Router();
const MemberAttendence = require("../models/Attendance_em");
//const { route } = require("./patientRoutes");
const memberAttendenceController =  require("../controller/Attendance_c");

//router.get("/",async(req,res,next) => {
    //This route will provide all of the member
   
//});

router.post("/add", memberAttendenceController.addMemberAttendence);
router.get("/", memberAttendenceController.getAllMemberAttendence);
router.delete("/deletememberattendence", memberAttendenceController.deleteAllMemberAttendence);

module.exports = router;