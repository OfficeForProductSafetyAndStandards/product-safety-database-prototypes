const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/add-product/counterfeit', function (req, res) {

  let counterfeit = req.session.data['counterfeit']

  if (counterfeit == 'yes') {
    res.redirect('/add-product/brand' )
  } else {
    res.redirect('/add-product/brand')
  }

})

router.post('/add-product/includes-brand', function (req, res) {

  let includesBrand = req.session.data['includes-brand']

  if (includesBrand == 'yes') {
    res.redirect('/add-product/brand-search?brand=' + req.session.data['brand'] )
  } else {
    res.redirect('/add-product/no-brand')
  }

})

router.post('/add-product/brand', function (req, res) {

  let brand = req.session.data['brand']

  if (brand == 'new') {
    res.redirect('/add-product/product-category' )
  } else {
    res.redirect('/add-product/products-for-brand')
  }

})

router.post('/add-product/existing-product', function (req, res) {

  let product = req.session.data['product']

  if (product == 'new') {
    res.redirect('/add-product/product-category' )
  } else {
    res.redirect('/add-product/product')
  }

})

module.exports = router
