const express = require('express')
const { getMessages, sendMessage, deleteMessage, deleteMessages } = require('../controllers/messages')
const router = express.Router()

const auth = require('../../middleware/auth')

router.get('/', auth, getMessages)
router.post('/', sendMessage)
router.delete('/:id', auth, deleteMessage)
router.delete('/', auth, deleteMessages)

module.exports = router