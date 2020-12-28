import express from 'express'
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

//Get all products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))

//Get a single product
router.get('/:id', asyncHandler(async (req, res) => {

    let productID = req.params.id

    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product)
    } else if (!productID.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(404).json({ message: 'Product not found.' })
    }
    else {
        res.status(404).json({ message: 'Product not found.' })
    }


}))

export default router