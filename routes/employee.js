const express = require(`express`);
const router = express.Router();
const async = require("../middleware/async");
const EmployeeController = require("../controller/employeeController");
const upload = require("../middleware/upload");
const authenticate = require("../middleware/authenticate");

router.get("/", async(EmployeeController.getAllEmployee));
router.post("/show", async(EmployeeController.getEmployeeByID));
router.post("/store", async(EmployeeController.addEmployee));
router.post("/update", async(EmployeeController.updateEmployee));
router.post("/delete", async(EmployeeController.deleteEmployee));

module.exports = router;
