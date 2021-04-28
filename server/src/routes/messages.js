const express = require('express');
const { getMessages, sendMessage, deleteMessage, deleteMessages } = require('../controllers/messages');
const router = express.Router()

router.get('/', getMessages)
router.post('/', sendMessage)
router.delete('/:id', deleteMessage)
router.delete('/', deleteMessages)

module.exports = router