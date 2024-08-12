import jwt from 'jsonwebtoken'
import User from '../models/userModels.js'

const protect = async(req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_JWT)
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            res.status(401).json({"error": "Not authorised, invalid token"})
        }
    } else {
        res.status(401).json({"error": "Not Authorized, No token"})
    }
}

export { protect }