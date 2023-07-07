const express = require("express");
const router = require("express").Router();
const Customer = require("../controller/customers_control_cm")
const multer = require("multer");
const path = require("path");

router.post("/addCustomer",Customer.addCustomer);
router.get("/",Customer.getCustomer);
router.put("/updateCustomer/:id",Customer.updateCustomer);
router.delete("/deleteCustomer/:id",Customer.deleteCustomer);
router.get("/get/:id",Customer.getOneCustomer);
router.put("/updateCustomerAddress/:id",Customer.updateCustomerAddress);
router.get("/search_customer_cm/:key",Customer.search_customer_cm);
router.post("/customerlogin",Customer.customerLogin);

//product image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/customerimages"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });

  router.post("/upload", upload.single("image"), (req, res, next) => {
    return res.json({
      path: `/customerimages/${req.file.filename}`
    });
  });



module.exports = router;

