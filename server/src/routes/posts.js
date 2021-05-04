const express = require('express')
const { getPosts, createPost, updatePost, deletePost, deletePosts } = require('../controllers/posts')
const router = express.Router()
const upload = require('../helpers/storage')

router.get('/', getPosts)
router.post('/', upload, createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.delete('/', deletePosts)

module.exports = router