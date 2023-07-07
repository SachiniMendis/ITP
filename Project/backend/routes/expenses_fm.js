const express = require("express");
const router = require("express").Router();
const expenseControl = require("../controller/expense_controller_fm");

router.post("/add",expenseControl.add_expense);
router.get("/",expenseControl.get_expense);
router.put("/update/:expenseId",expenseControl.update_expense);
router.delete("/delete/:expenseId",expenseControl.delete_expense);
router.get("/getexpense/:expenseId",expenseControl.get_one_expense);
router.get("/search_expense/:key",expenseControl.search_expense);

module.exports=router;

