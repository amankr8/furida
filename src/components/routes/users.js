const express = require('express')
const { register, login } = require('../controllers/users')
const router = express.Router()

const auth = require('../../middleware/auth')

router.post('/register', register)
router.post('/login', login)

module.exports = router