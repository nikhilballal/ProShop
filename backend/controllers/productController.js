//productController to handle the functionality and productRoutes to contain the routes only for simplicity
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}) // returns all the products from the database
  res.json(products)
})

// @desc Fetch all products
// @route GET /api/products
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id) //gives us the id that is in the URL

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export { getProducts, getProductById }
