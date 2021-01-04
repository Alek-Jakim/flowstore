import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


//Get all products
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        const { _id, name, email, isAdmin } = user

        res.json({ _id, name, email, isAdmin, token: null })
    } else {
        res.status(401)
        throw new Error('Invalid email or password!')
    }
});

export { authUser }