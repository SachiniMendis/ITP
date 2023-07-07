const router=require("express").Router();
const product_c=require("../controller/product_c_im");
const multer = require("multer");
const path = require("path");



router.post("/add_product",product_c.add_product);
router.get("/get_product",product_c.get_product);
router.put("/update_product/:id",product_c.update_product);
router.delete("/delete_product/:id",product_c.delete_product);
router.get("/get_one_product/:id",product_c.get_one_product);
router.get("/get_one_product_code/:pcode",product_c.get_one_product_code);
router.get("/search_product_im/:key",product_c.search_product_im);
router.put("/update_product_code/:pcode",product_c.update_product_code);
router.get("/get_one_product_code_one/:pcode",product_c.get_one_product_code_one);



//product image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/productimages/"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });

  router.post("/upload", upload.single("image"), (req, res, next) => {
    return res.json({
      path: `/productimages/${req.file.filename}`
    });
  });





module.exports=router;