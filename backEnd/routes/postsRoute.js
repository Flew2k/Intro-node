const express = require("express");
const router = express.Router();
const { 
    getPosts,
    getPost,
    createPost,
} = require('../controllers/postController');

router
    .post('/', createPost)
    .get('/', getPosts)
    .get("/:id", getPost);

module.exports = router;