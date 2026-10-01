const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers/categoryControllers");

router.post("/admin/add-category", categoryControllers.addCategory);

module.exports = router;
