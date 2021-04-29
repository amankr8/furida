const express = require('express')
const { getPosts, createPost, updatePost, deletePost, deletePosts } = require('../controllers/posts')
const router = express.Router()
const upload = require('../helpers')

router.get('/', getPosts)
router.post('/', upload.single('img'), createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.delete('/', deletePosts)

module.exports = router