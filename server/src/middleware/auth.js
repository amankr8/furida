const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token')
        if (!token) {
            res.status(401).json({ message: 'Authorization denied'})
        }
        else {
            const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.admin = decodedData

            next()
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = auth