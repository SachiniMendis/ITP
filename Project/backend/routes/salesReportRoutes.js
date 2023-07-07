const pdf_c= require("../controller/salesReport_om");

const router = require("express").Router();

router.post("/createPdf",pdf_c.createPdf);
router.get("/fetchPdf",pdf_c.fetchPdf);


module.exports=router;