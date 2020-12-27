import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'

//Database Models
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!')
        process.exit()
    }
    catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!')
        process.exit()
    }
    catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}

//this refers to the npm commands, like node backend/server -d, the item with [2] index is -d
if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}