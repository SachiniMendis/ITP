const express = require("express");
const router = require("express").Router();
const Return_Item = require("../controller/return_item_c_cm");

router.post("/addReturnItem",Return_Item.AddReturn);
router.get("/",Return_Item.getReturnItem);
router.put("/updateReturnitem/:id",Return_Item.updateReturnItem);
router.delete("/deleteReturnitem/:id",Return_Item.deleteReturnItem);
router.get("/get/:email",Return_Item.getOneReturnItem);


module.exports = router;