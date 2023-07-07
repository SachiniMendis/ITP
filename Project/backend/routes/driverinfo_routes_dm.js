
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
//const Driverinfo= require("../models/Driverinfo_dm");
const driversController=require("../controller/drivers_controller_dm");

router.get("/", driversController.getAlldriverDetails);
router.post("/add",driversController.adddriverDetails);
router.get("/:id",driversController.getById);
router.put("/update/:id",driversController.updatedriverDetails);
router.delete("/:id",driversController.deletedriverDetails);
router.get("/searchdriver/:key",driversController.searchdriver);


  
module.exports=router;