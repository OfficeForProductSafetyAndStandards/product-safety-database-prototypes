const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// **** Start folder specific routes

// old add-product-v4
router.use('/add-product-v4', require('./views/add-product-v4/_routes'));

// current sprint, remember to add older sprint when adding a new folder!
router.use('/create-cases-add-products', require('./views/create-cases-add-products/_routes'));


// **** End folder specific routes

module.exports = router
