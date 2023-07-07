const router = require("express").Router();
const Cart= require("../controller/CartPage_c_om")

router.post("/addItemToCart",Cart.addItemToCart);
router.delete("/deleteItem/:id", Cart.deleteItem);
router.delete("/deleteAllItem/:customerId", Cart.deleteAllItem);
router.get("/getCartItems/:customerId",Cart.getCartItems);
router.put("/updateCart/:id",Cart.updateCart);
module.exports = router;