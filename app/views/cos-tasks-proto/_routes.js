const express = require('express')
const router = express.Router()

/*** what's it called ***/
router.post('/task1-what-is-it-called', function (req, res) {
  const isname = req.session.data['notification_product_name']

  if (isname == '') {
    res.redirect('/cos-tasks-proto/task1-what-is-it-called')
  } else {
    res.redirect('/cos-tasks-proto/task1-internal-reference')
  }
})
/*** internal reference ***/
router.post('/task1-internal-reference', function (req, res) {
  const isref = req.session.data['notification_add_internal_reference']

  if (isref == null) {
    res.redirect('/cos-tasks-proto/task1-internal-reference')
  } else {
    res.redirect('/cos-tasks-proto/task1-under-3-years')
  }
})
/*** under 3 years ***/
router.post('/task1-under-3-years', function (req, res) {
  const isthree = req.session.data['notification_under_three_years']

  if (isthree == null) {
    res.redirect('/cos-tasks-proto/task1-under-3-years')
  } else {
    res.redirect('/cos-tasks-proto/task1-does-it-contain-nanomaterials')
  }
})









module.exports = router