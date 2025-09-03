const express = require('express')
const route = new express.Router()
const controller = require('./controller')


//path to add products
route.post('/add-products',controller.addProductsController)

//get all products
route.get('/get-products',controller.getAllProductsController)

//get product by id
route.get('/product/:id',controller.getProductByIdController)

//update product by Id
route.put('/product-update/:id',controller.updateProductController)

//delete product by Id
route.delete('/product-delete/:id',controller.deleteProductController)


module.exports = route