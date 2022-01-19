const express = require("express");
const { getAllUsers, createUser, updateUser, getUser, deleteUser, loginUser } = require("../controllers/userControllers.js");
const { auth } = require("../middleware/auth")

const router = express.Router()

router.get("/", getAllUsers)

router.post("/",createUser)

router.put("/:id",auth, updateUser)

router.get("/:id",auth,getUser)

router.delete("/:id",auth, deleteUser)

router.post("/login", loginUser)

module.exports = router