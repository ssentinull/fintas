const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.delete("/:id", userController.deleteUser);
router.get("/test", userController.test);
router.get("/", userController.readUsers);
router.get("/:id", userController.readUser);
router.post("/", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/reset-token", userController.resetUserToken);
router.put("/", userController.updateUser);

module.exports = router;
