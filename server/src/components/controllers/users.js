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
        const isUsername = await User.findOne({ username: req.body.username })
        if(isUsername) {
            return res.status(400).json({ message: 'Username unavailable! try another one' })
        }

        // Encrypt password and save user
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        await newUser.save()

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

        res.json({
            user: newUser,
            token
        })
    } catch (error) {
        res.status(500).json({ message: 'Err... Something went wrong' })
        console.error(error)
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
        const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

        res.json({
            user: isUser,
            token
        })
    } catch (error) {
        res.status(500).json({ message: 'Err... Something went wrong' })
        console.error(error)
    }
}

exports.logout = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: 'Err... Something went wrong' })
        console.error(error)
    }
}