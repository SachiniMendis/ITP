const router=require("express").Router();
const admin=require("../controller/adminlogin_c");



router.post("/adminlogin",admin.adminLogin);


module.exports = router;
