var Admin = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const existingAdmin = await Admin.findOne({ email: req.body.email })
        const existingUsername = await Admin.findOne({ username: req.body.username })
        if(existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists!' })
        }
        else if(existingUsername) {
            return res.status(400).json({ message: 'username already exists! try choosing a different one' })
        }
        else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newAdmin = await Admin({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })
            await newAdmin.save()

            const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

            res.json({
                result: newAdmin,
                token: token
            })
        }
    } catch (error) {
        res.status(500).json({ message: 'Err... Something went wrong' })
        console.error(error)
    }
}

exports.login = async (req, res) => {
    try {
        const existingAdmin = await Admin.findOne({ email: req.body.email })
        if(!existingAdmin) {
            return res.status(400).json({ message: 'Invalid credentials!' })
        }
        else {
            const isMatch = await bcrypt.compare(req.body.password, existingAdmin.password)
            if(!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials!' })
            }
            else {
                const token = jwt.sign({ id: existingAdmin._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

                res.json({
                    result: existingAdmin,
                    token: token
                })
            }
        }
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