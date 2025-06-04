const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/createNewUser", userController.createNewUser)
router.get("/getAllUsers", userController.getAllUsers)
router.get("/getUserById", userController.getUserById)
router.put("/updateUser", userController.updateUser)

module.exports = router