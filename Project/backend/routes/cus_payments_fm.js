const express = require("express");
const router = require("express").Router();
const paymentControl = require("../controller/cus_payment_controller_fm");

router.post("/add",paymentControl.add_payment);
// router.get("/",paymentControl.get_payment);
// router.put("/update/:paymentId",paymentControl.update_payment);
// router.delete("/delete/:paymentId",paymentControl.delete_payment);

module.exports=router;