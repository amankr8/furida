var Admin = require('../models/admin')
const bcrypt = require('bcryptjs')

exports.createAdmin = async (req, res) => {
    try {
        const existingAdmin = await Admin.findOne({ email: req.body.email })
        const existingUsername = await Admin.findOne({ username: req.body.username })
        if(existingAdmin) return res.status(400).json({ status: 'Admin already exists!' })
        if(existingUsername) return res.status(400).json({ status: 'username already exists! try choosing a different one' })

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newAdmin = await Admin({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        await newAdmin.save()
        res.json(newAdmin)
    } catch (error) {
        console.error(error)
    }
}