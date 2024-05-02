import User from '../models/userModels.js'
import generateToken from '../utils/generateToken.js'

const authUser = async(req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({email})

        if(user && (await user.matchPasswords(password))){
            const token = generateToken(user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user._email,
                token
            })
        }
        else{
            res.status(401);
            throw new Error('Invalid email or password')
        }
    } catch (error) {
        next(error)
    }
}

const registerUser = async( req, res, next) => {
    try {
        const { name, email, password } = req.body

        const userExists = await User.findOne({email})

        if(userExists) {
            const error = new Error('User already exists')
            error.statusCode = 409
            throw error
        }

        const user = await User.create({
            name,
            email,
            password
        })

        if(user) {
            const token = generateToken(user._id)
            res.status(201).json({
                message: 'Uses registered successfully',
                _id: user._id,
                name: user.name,
                email: user.email,
                token: token
            })
        }
    } catch (error) {
        next(error)
    }
}

const logoutUser = async(req, res) => {
    res.status(200).json({ message: 'Logout User' })
}

const getUserProfile = async(req, res) => {
    res.status(200).json({ message: 'get user profile' })
}

const updateUserProfile = async(req, res) => {
    res.status(200).json({ message: 'update User profile' })
}



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}