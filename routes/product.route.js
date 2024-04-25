const express = require('express')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')
const router = express.Router();

// find product
router.get('/', getProducts)
router.get('/:id', getProduct)

// add product
router.post('/', createProduct)

// update product
router.put('/:id', updateProduct)

// delete product
router.delete('/:id', deleteProduct)

module.exports = router