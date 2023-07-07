const router=require("express").Router();
const driver=require("../controller/driverlogin_dm");



router.post("/driverlogin",driver.driverLogin);


module.exports = router;
