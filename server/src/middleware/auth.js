const jwt = require('jsonwebtoken')
const User = require('../components/models/User')

const auth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(401).json({ message: 'Authorization denied'})
        }
        else {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            const user = await User.findById(decoded.id)
            req.user = user

            next()
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = auth