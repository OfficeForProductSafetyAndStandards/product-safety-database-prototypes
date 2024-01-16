const express = require('express')
const router = express.Router()

// Search or add a business //
router.post('/search-businesses', function (req, res) {
  res.redirect('./how-to-add-business'); 
})

// How to add a business //
router.post('/how-to-add-business', function (req, res) {
  const addBusiness = req.session.data['add-business'];
  if (addBusiness === 'companies-house') {
    res.redirect('./search-companies-house');
  } else if (addBusiness === 'manually') {
    res.redirect('./enter-business-details');
  } else {
    res.status(204).end(); // <-- No redirect when not selected
  }
});

// Manual //
router.post('/enter-business-details', function (req, res) {
  res.redirect('./business-blank'); 
})

// Bartholmew //
router.post('/business-bartholomew', function (req, res) {
  res.redirect('./business-role'); 
})

// Cunningham //
router.post('/business-cunningham', function (req, res) {
  res.redirect('./business-role'); 
})

// Dreams //
router.post('/business-dreams', function (req, res) {
  res.redirect('./business-role'); 
})

// Blank //
router.post('/business-blank', function (req, res) {
  res.redirect('./business-role'); 
})

// Edit details //
router.post('/edit-business-details', function (req, res) {
  res.redirect('./business-dreams'); 
})

// Business role //
router.post('/business-role', function (req, res) {
  res.redirect('./added-business-summary'); 
})

// Duplicate  //
router.post('/duplicate-business', function (req, res) {
  res.redirect('./business-dreams'); 
})

// Business summary //
router.post('/added-business-summary', function (req, res) {
  const changedName = req.session.data['changedName'];
  if (changedName === 'yes') {
    res.redirect('./search-businesses');
  } else if (changedName === 'no') {
    res.redirect('./notification-task-list-2');
  } else {
    res.status(204).end(); // <-- No redirect when not selected
  }
});

module.exports = router