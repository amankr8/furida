const express = require('express')
const { getPosts, createPost, updatePost, deletePost, deletePosts } = require('../controllers/posts')
const router = express.Router()
const upload = require('../../helpers')

const auth = require('../../middleware/auth')

router.get('/', getPosts)
router.post('/', auth, upload, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.delete('/', auth, deletePosts)

module.exports = router