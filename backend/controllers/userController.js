import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


//Get all products
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        const { _id, name, email, isAdmin } = user

        res.json({ _id, name, email, isAdmin, token: generateToken(_id) })
    } else {
        res.status(401)
        throw new Error('Invalid email or password!')
    }
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({ name, email, password })

    if (user) {

        const { _id, name, email, isAdmin } = user


        res.status(201).json({ _id, name, email, isAdmin, token: generateToken(_id) })
    } else {
        res.status(400)
        throw new Error('Invalid User Data!')
    }

});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        const { _id, name, email, isAdmin } = user

        res.json({ _id, name, email, isAdmin })
    } else {
        res.status(404)
        throw new Error('User Not Found!')
    }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        const { _id, name, email, isAdmin } = user

        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        })

    }
});



export { authUser, getUserProfile, registerUser, updateUserProfile }