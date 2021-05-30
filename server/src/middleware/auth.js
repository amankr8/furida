const jwt = require('jsonwebtoken')
const User = require('../components/models/User')

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            res.status(401).json({ message: 'Authorization denied'})
        }
        else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            const user = await User.findById(decoded.id)
            req.user = user

            next()
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = auth