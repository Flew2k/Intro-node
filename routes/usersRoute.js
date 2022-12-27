const express = require("express");
const router = express.Router();
const { 
    getUser,
    getUsers,
    createUser,
} = require('../controllers/usersController');

router
    .post('/', createUser)
    .get('/', getUsers)
    .get("/:id", getUser);

module.exports = router;