const express = require("express");
const router = express.Router();
const async = require("../middleware/async");

const productControlller = require("../controller/productController");
router.get("/", async(productControlller.getAllProduct));
router.post("/show", async(productControlller.getProductByID));
router.post("/store", async(productControlller.addProduct));
router.post("/update", async(productControlller.updateProduct));
router.post("/delete", async(productControlller.deleteProduct));

module.exports = router;
