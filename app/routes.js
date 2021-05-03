const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//************* routes for add-product-v4 ************* starts

router.post('/add-product-v4/is-this-case-related-to-covid', function (req, res) {
  const iscovid = req.session.data['covid-related']

  if (iscovid == null) {
    res.redirect('/add-product-v4/is-this-case-related-to-covid-error' )
  } else {
    res.redirect('/add-product-v4/reason-for-creating-case' )
  }
})
router.post('/add-product-v4/is-this-case-related-to-covid-error', function (req, res) {
  const iscoviderror = req.session.data['covid-related']

  if (iscoviderror != null) {
    res.redirect('/add-product-v4/reason-for-creating-case' )
  }
})

router.post('/add-product-v4/reason-for-creating-case', function (req, res) {
  const casereason = req.session.data['reason']

  if (casereason == null) {
    res.redirect('/add-product-v4/reason-for-creating-case-error' )
  } else {
    res.redirect('/add-product-v4/is-case-counterfeit' )
  }
})
router.post('/add-product-v4/reason-for-creating-case-error', function (req, res) {
  const casereasonerror = req.session.data['reason']

  if (casereasonerror != null) {
    res.redirect('/add-product-v4/is-case-counterfeit' )
  }
})

router.post('/add-product-v4/is-case-counterfeit', function (req, res) {
  const counterfeit = req.session.data['counterfeit']

  if (counterfeit == null) {
    res.redirect('/add-product-v4/is-case-counterfeit-error' )
  } else {
    res.redirect('/add-product-v4/do-you-have-the-barcode' )
  }
})
router.post('/add-product-v4/is-case-counterfeit-error', function (req, res) {
  const counterfeiterror = req.session.data['counterfeit']

  if (counterfeiterror != null) {
    res.redirect('/add-product-v4/do-you-have-the-barcode' )
  }
})
//************* start barcode
router.post('/add-product-v4/do-you-have-the-barcode', function (req, res) {
  var barcode = req.session.data['barcode']
  var barnumber = req.session.data['barnumber']

  if ((barcode == 'yes') && (barnumber == '')) {
    return res.redirect('/add-product-v4/do-you-have-the-barcode-error-2')
  } else if ((barcode == 'yes') && (barnumber != '')) {
    return res.redirect('/add-product-v4/select-a-product-barCodeTxt')
  } else if (barcode == 'no') {
    return res.redirect('/add-product-v4/search-for-an-existing-product')
  } else {
    return res.redirect('/add-product-v4/do-you-have-the-barcode-error')
  }
})
router.post('/add-product-v4/do-you-have-the-barcode-error', function (req, res) {
  var barcode1 = req.session.data['barcode']
  if ((barcode == 'yes') && (barnumber != '')) {
    res.redirect('/add-product-v4/select-a-product-barCodeTxt')
  } else if (barcode1 == 'no') {
    return res.redirect('/add-product-v4/search-for-an-existing-product')
  }
})
router.post('/add-product-v4/do-you-have-the-barcode-error-2', function (req, res) {
  var barcode2 = req.session.data['barcode']
  var barnumber2 = req.session.data['barnumber']
  if ((barcode2 == 'yes') && (barnumber2 != '')) {
    return res.redirect('/add-product-v4/select-a-product-barCodeTxt')
  } else if (barcode2 == 'no') {
    return res.redirect('/add-product-v4/search-for-an-existing-product')
  }
})
//************* end barcode

//************* start search for existing product
router.post('/add-product-v4/search-for-an-existing-product', function (req, res) {
  var keywords = req.session.data['keywords']

  if (keywords == '') {
    return res.redirect('/add-product-v4/search-for-an-existing-product-error')
  } else {
    return res.redirect('/add-product-v4/select-a-product')
  }
})
router.post('/add-product-v4/search-for-an-existing-product-error', function (req, res) {
  var keywords2 = req.session.data['keywords']

  if (keywords2 == '') {
    return res.redirect('/add-product-v4/search-for-an-existing-product-error')
  } else {
    return res.redirect('/add-product-v4/select-a-product')
  }
})
//*************************************************** ends

//************* start select-a-product
router.post('/add-product-v4/select-a-product', function (req, res) {
  var productitem = req.session.data['product-item']
//
  if (productitem == null) {
    return res.redirect('/add-product-v4/select-a-product-error')
  } else {
    return res.redirect('/add-product-v4/what-is-the-product-name')
  }
})
router.post('/add-product-v4/select-a-product-error', function (req, res) {
  var productitem2 = req.session.data['product-item']

  if (productitem2 == null) {
    return res.redirect('/add-product-v4/select-a-product-error')
  } else {
    return res.redirect('/add-product-v4/what-is-the-product-name')
  }
})
//*************************************************** ends

//} else if ((barcode == 'yes') && (barnumber == '2021')) {
    //return res.redirect('/add-product-v4/select-a-product-barCodeTxt')


//************* routes for add-product-v4 ************* ends
/*
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
    res.redirect('/add-product/product' )
  }

})

router.post('/product-categoriser/update', function (req, res) {

  let newCategory = req.session.data['new-category']

  if (newCategory == 'other') {
    res.redirect('/product-categoriser/start?search=' + req.session.data['category-name'] )
  } else {
    res.redirect('/product-categoriser/done')
  }

})
*/

module.exports = router
