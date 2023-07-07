const express = require("express");
const router = require("express").Router();
const requestControl = require("../controller/request_control");

router.post("/addRequest", requestControl.addRequest);
router.get("/", requestControl.getRequest);
router.put("/update/:id",requestControl.updateRequest);
router.delete("/delete/:id",requestControl.deleteRequest);
router.get("/get/:id",requestControl.getOneRequest);
router.get("/searchRequest/:key", requestControl.searchRequest);

module.exports = router;