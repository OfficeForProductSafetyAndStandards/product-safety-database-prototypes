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
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid')
  }
})
router.post('/find-the-product-error', function (req, res) {
  const isrelatederror = req.session.data['related']

  if (isrelatederror == null) {
    res.redirect('/create-cases-add-products/find-the-product-error')
  } else if (isrelatederror == 'yes') {
      res.redirect('/create-cases-add-products/products-page')
  } else if (isrelatederror == 'no') {
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid')
  }
})
//************* is-this-case-related-to-covid ************* starts
router.post('/is-this-case-related-to-covid', function (req, res) {
  const iscovid = req.session.data['covid-related']

  if (iscovid == null) {
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid-error' )
  } else {
    res.redirect('/create-cases-add-products/reason-for-creating-case' )
  }
})
router.post('/is-this-case-related-to-covid-error', function (req, res) {
  const iscoviderror = req.session.data['covid-related']

  if (iscoviderror != null) {
    res.redirect('/create-cases-add-products/reason-for-creating-case' )
  }
})
//********************* start reason-for-creating-case
router.post('/reason-for-creating-case', function (req, res) {
  const casereason = req.session.data['reason']

  if (casereason == null) {
    res.redirect('/create-cases-add-products/reason-for-creating-case-error' )
  } else if (casereason == 'issafeoption') {
      res.redirect('/create-cases-add-products/is-case-counterfeit' )
  } else {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern' )
  }
})
router.post('/reason-for-creating-case-error', function (req, res) {
  const casereasonerror = req.session.data['reason']

  if (casereasonerror != null) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern' )
  }
})
//********************* why is the product of concern
router.post('/why-is-the-product-of-concern', function (req, res) {
  const safety = req.session.data['safety']

  if (safety == null) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern-error' )
  } else if ((safety != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/create-cases-add-products/is-case-counterfeit' )
  }
})
router.post('/why-is-the-product-of-concern-error', function (req, res) {
  if ((req.session.data['safety'] == null)) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error' )
  } else if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/create-cases-add-products/is-case-counterfeit' )
  }
})
router.post('/why-is-the-product-of-concern-error-2', function (req, res) {
  if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/create-cases-add-products/is-case-counterfeit' )
  }
})
//******************* is-case-counterfeit
router.post('/is-case-counterfeit', function (req, res) {
  const counterfeit = req.session.data['counterfeit']

  if (counterfeit == null) {
    res.redirect('/create-cases-add-products/is-case-counterfeit-error' )
  } else {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std' )
  }
})
router.post('/is-case-counterfeit-error', function (req, res) {
  const counterfeiterror = req.session.data['counterfeit']

  if (counterfeiterror != null) {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std' )
  }
})





module.exports = router