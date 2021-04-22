const express = require('express');
const { getMessages, sendMessage, deleteMessage, deleteMessages } = require('../controllers/messages');
const router = express.Router()

router.get('/', getMessages)
router.post('/send', sendMessage)
router.delete('/delete/:id', deleteMessage)
router.delete('/delete', deleteMessages)

module.exports = router