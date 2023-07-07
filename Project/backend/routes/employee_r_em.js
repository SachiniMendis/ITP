const express = require("express");
const router = require("express").Router();
const Employee = require("../controller/employee_c_em");
const path = require("path");

router.post("/addEmployee",Employee.addemployee);
router.get("/",Employee.getEmployee);
router.put("/updateEmployee/:id",Employee.updateEmployee);
router.delete("/deleteEmployee/:id",Employee.deleteEmployee);
router.get("/getOneEmployee/:id",Employee.getOneEmployee);
router.get("/search_employee_em/:key",Employee.search_employee_em);

module.exports = router;