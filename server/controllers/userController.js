import User from '../models/userModels.js'
import generateToken from '../utils/generateToken.js'

const authUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (user && (await user.matchPasswords(password))) {
            const token = generateToken(user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user._email,
                token
            })
        }
        else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            res.status(409).json({ error: 'User Already exists' });
        }

        const user = await User.create({
            name,
            email,
            password
        })

        if (user) {
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
        res.status(500).json({ "error": error.message })
    }
}

const logoutUser = async (req, res) => {
    res.status(200).json({ message: 'Logout User' })
}

const getUserProfile = async (req, res) => {
    try {
        const user = {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const { name, email } = req.body

        const checkUserExists = await User.findOne({ email })

        if(checkUserExists && checkUserExists.email!==req.user.email) {
            const error = new Error('User with this email already exists')
            throw error
        }

        const updatedUser = await User.findOneAndUpdate({email: req.user.email},
            {$set: {name, email}},
            {new: true}
        )

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}