const express = require("express");
const router = express.Router();
const {getUsers, getPosts} = require("../controllers/get/Get")


router.get('/users', getUsers)
router.get('/posts', getPosts)





module.exports = router