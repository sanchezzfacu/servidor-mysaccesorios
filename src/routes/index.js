const { Router } = require('express');
const router = Router();


//PRODUCT
const productsRoute = require('./product/product')
const productCreate = require('./product/createProduct')
const productDelete = require('./product/deleteProduct')
//CATEGORY
const categoryRoute = require('./category/categories')
const categoryCreate = require('./category/createCategory')

////////////////////////////////////////////////////////////

//Endpoints para product
router.use('/product', productsRoute)
router.use('/createproduct', productCreate)
router.use('/deleteproduct', productDelete)

//Endpoints para category
router.use('/category', categoryRoute)
router.use('/createcategory', categoryCreate)


module.exports = router;
