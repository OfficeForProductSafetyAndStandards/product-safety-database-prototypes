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
    req.session.data['brand'] = req.session.data['new-brand']
    res.redirect('/add-product/product-category' )
  } else {
    res.redirect('/add-product/products-for-brand')
  }

})

router.post('/add-product/set-product-category', function (req, res) {

  let productCategory = req.session.data['product-category']

  if (productCategory == 'new') {
    req.session.data['product-category'] = req.session.data['new-product-category']
  }

  res.redirect('/add-product/product-name' )

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
