const express = require ('express')
const router = express.Router()


const {getProducts, newProduct, updateProduct} = require('../controllers/productController')  


router.route('/product').get(getProducts)
router.route('/admin/product/new').post(newProduct)
router.route('/admin/product/:id').put(updateProduct)


module.exports = router