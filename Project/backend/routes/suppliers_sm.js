const express=require("express");
const router=require("express").Router();
let supplierControl=require("../controller/supplier_control.js");

router.post("/add_supplier",supplierControl.add_supplier);
router.get("/",supplierControl.get_supplier);
router.put("/update/:id",supplierControl.update_supplier);
router.delete("/delete/:id",supplierControl.delete_supplier);
router.get("/get/:id",supplierControl.getOne_supplier);
router.get("/search_supplier/:key",supplierControl.search_supplier);

module.exports=router;