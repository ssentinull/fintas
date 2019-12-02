const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.test);
router.post("/", userController.create);

module.exports = router;
