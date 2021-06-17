const express = require('express')
const router = express.Router()



//************* routes for /create-cases-add-products ************* starts

router.post('/find-the-product', function (req, res) {
  const isrelated = req.session.data['related']

  if (isrelated == null) {
    res.redirect('/create-cases-add-products/find-the-product-error')
  } else if (isrelated == 'yes') {
      res.redirect('/create-cases-add-products/products-page')
  } else if (isrelated == 'no') {
    res.redirect('/add-product-v4/is-this-case-related-to-covid')
  }
})
router.post('/find-the-product-error', function (req, res) {
  const isrelatederror = req.session.data['related']

  if (isrelatederror == null) {
    res.redirect('/create-cases-add-products/find-the-product-error')
  } else if (isrelatederror == 'yes') {
      res.redirect('/create-cases-add-products/products-page')
  } else if (isrelatederror == 'no') {
    res.redirect('/add-product-v4/is-this-case-related-to-covid')
  }
})



module.exports = router