// user routes ->for routing->  contains declarations for http metods -? get/post/put/delete etc..

const express = require("express")
const router = express.Router()

const { getUsers } = require("../controllers/userController");
const { login } = require("../controllers/userController");



//fetches all registered users,  from db
router.get("/", getUsers)
router.post("/login", login)




module.exports = router