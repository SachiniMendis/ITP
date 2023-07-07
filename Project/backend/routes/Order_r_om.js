const router = require("express").Router();
const Order= require("../controller/Order_c_om")

router.post("/addOrder",Order.addOrder);
router.delete("/deleteorder/:id", Order.deleteOrder);
router.get("/getOrders",Order.getOrders);
router.put("/UpdateStatus/:id",Order.UpdateStatus)
router.get("/searchOrder/:key",Order.search_order_om)
module.exports = router;