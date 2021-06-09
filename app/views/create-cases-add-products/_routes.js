const express = require('express')
const router = express.Router()



//************* routes for /create-cases-add-products ************* starts

router.post('/is-this-case-related-to-covid', function (req, res) {
  const iscovid = req.session.data['covid-related']

  if (iscovid == null) {
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid-error' )
  } else {
    res.redirect('/create-cases-add-productsreason-for-creating-case' )
  }
})
router.post('/is-this-case-related-to-covid-error', function (req, res) {
  const iscoviderror = req.session.data['covid-related']

  if (iscoviderror != null) {
    res.redirect('/create-cases-add-products/reason-for-creating-case' )
  }
})



module.exports = router