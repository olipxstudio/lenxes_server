const express = require("express");
const router = express.Router();
const {getUsers} = require("../controllers/get/Get")


router.get('/users', getUsers)





module.exports = router