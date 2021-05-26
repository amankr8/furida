const express = require('express')
const { createAdmin } = require('../controllers/admins')
const router = express.Router()

router.post('/create', createAdmin)

module.exports = router