const express=require("express");
const router=require("express").Router();
let productControl=require("../controller/product_control.js");

router.post("/add",productControl.add_product);
router.get("/",productControl.get_product);
router.put("/update/:id",productControl.update_product);
router.delete("/delete/:id",productControl.delete_product);
router.get("/get/:id",productControl.getOne_product);

module.exports=router;