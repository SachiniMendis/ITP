const router=require("express").Router();
const stock_c=require("../controller/stock_c_im");

router.post("/add_stock",stock_c.add_stock);
router.get("/get_stock",stock_c.get_stock);
router.put("/update_stock/:id",stock_c.update_stock);
router.delete("/delete_stock/:id",stock_c.delete_stock);
router.get("/get_one_stock/:id",stock_c.get_one_stock);
router.get("/get_product_stock/:pCode",stock_c.get_product_stock);

module.exports=router;