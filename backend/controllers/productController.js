import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//Get all products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
});

//Get a single product by ID
const getProductByID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export {
    getProducts,
    getProductByID
}