const categoryModel = require("../controller/categoryController");
const express = require("express");
const router = express.Router();
const async = require("../middleware/async");

router.get("/", async(categoryModel.getAllCategory));
router.post("/show", async(categoryModel.getCategoryByID));
router.post("/store", async(categoryModel.addCategory));
router.post("/update", async(categoryModel.updateCategory));
router.post("delete", categoryModel.deleteCategory);

module.exports = router;
