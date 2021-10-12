const express = require('express')
const router = express.Router()

/*** what's it called ***/
router.post('/task1-what-is-it-called', function (req, res) {
  var isname = req.session.data['notification_product_name']

  if (isname == '') {
    res.redirect('/cos-tasks-proto/task1-what-is-it-called')
  } else {
    res.redirect('/cos-tasks-proto/task1-internal-reference')
  }
})
/*** internal reference ***/
router.post('/task1-internal-reference', function (req, res) {
  var isref = req.session.data['notification_add_internal_reference']

  if (isref == null) {
    res.redirect('/cos-tasks-proto/task1-internal-reference')
  } else {
    res.redirect('/cos-tasks-proto/task1-under-3-years')
  }
})
/*** under 3 years ***/
router.post('/task1-under-3-years', function (req, res) {
  var isthree = req.session.data['notification_under_three_years']

  if (isthree == null) {
    res.redirect('/cos-tasks-proto/task1-under-3-years')
  } else {
    res.redirect('/cos-tasks-proto/task1-does-it-contain-nanomaterials')
  }
})
/*** does it contain nanomaterials ***/
router.post('/task1-does-it-contain-nanomaterials', function (req, res) {
  var isnano = req.session.data['nano']
  var ishowmany = req.session.data['nano-qty']

  if (isnano == null) {
    res.redirect('/cos-tasks-proto/task1-does-it-contain-nanomaterials')
  }
  /*else if (isnano == 'yes') {

    if(ishowmany == ''){
      res.redirect('/cos-tasks-proto/task1-does-it-contain-nanomaterials')
    }else{
      res.redirect('/cos-tasks-proto/task1-how-is-user-exposed')//<<<<<<<<<<<<<<<<<<<
    }

  } else if (isnano == 'no') {

    res.redirect('/cos-tasks-proto/task1-blank1')//<<<<<<<<<<<<<<<<<<< no. redirects to task1-multi-items.html


  } else if (isnano == 'dontknow') {
    res.redirect('/cos-tasks-proto/task1-blank2')//<<<<<<<<<<<<<<<<<<< dontknow. redirects to task1-multi-items.html
  }*/

})









module.exports = router