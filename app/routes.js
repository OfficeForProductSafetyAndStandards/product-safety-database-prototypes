const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// **** Start folder specific routes


//COS drafts/tasks prototype
router.use('/cos-tasks-proto', require('./views/cos-tasks-proto/_routes'));

// old add-product-v4
router.use('/add-product-v4', require('./views/add-product-v4/_routes'));

// current sprint, remember to add older sprint when adding a new folder!
router.use('/create-cases-add-products', require('./views/create-cases-add-products/_routes'));
router.use('/drafts-gui', require('./views/drafts-gui/_routes'));
router.use('/product-case-testing', require('./views/product-case-testing/_routes'));


// **** End folder specific routes

module.exports = router



