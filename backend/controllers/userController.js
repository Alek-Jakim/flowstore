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



export { authUser, getUserProfile }