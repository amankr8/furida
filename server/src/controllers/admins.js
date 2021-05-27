var Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        const existingAdmin = await Admin.findOne({ email: req.body.email })
        if(!existingAdmin) {
            return res.status(400).json({ message: 'Invalid credentials!' })
        }
        else {
            const isPasswordCorrect = await bcrypt.compare(req.body.password, existingAdmin.password)
            if(!isPasswordCorrect) {
                return res.status(400).json({ message: 'Invalid credentials!' })
            }
            else {
                const token = jwt.sign({ id: existingAdmin._id }, process.env.JWT_SECRET_KEY, { expiresIn: 3600 })

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

            const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET_KEY, { expiresIn: 3600 })

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