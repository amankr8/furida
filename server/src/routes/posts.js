const express = require('express')
const { getPosts, createPost, updatePost, deletePost, deletePosts } = require('../controllers/posts')
const router = express.Router()

router.get('/', getPosts)
router.post('/create', createPost)
router.patch('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)

module.exports = router