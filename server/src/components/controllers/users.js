const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        // Check if user already exists
        const isUser = await User.findOne({ email: req.body.email })
        if(isUser) {
            return res.status(400).json({ message: 'User already exists!' })
        }
        const isUsername = await User.findOne({ username: req.body.username.toLowerCase() })
        if(isUsername) {
            return res.status(400).json({ message: 'Username unavailable! try another one' })
        }

        // Encrypt password and save user
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            username: req.body.username.toLowerCase(),
            email: req.body.email,
            password: hashedPassword
        })
        await newUser.save()

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

        res.json({
            user: newUser.username,
            token: token
        })
    } catch (err) {
        console.error(err)
    }
}

exports.login = async (req, res) => {
    try {
        // Check if input is valid
        const isUser = await User.findOne({ email: req.body.email })
        if(!isUser) {
            return res.status(400).json({ message: 'Invalid credentials!' })
        } 
        const isMatch = await bcrypt.compare(req.body.password, isUser.password)
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' })
        }

        // Generate token
        const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

        res.json({
            user: isUser.username,
            token: token
        })
    } catch (err) {
        console.error(err)
    }
}