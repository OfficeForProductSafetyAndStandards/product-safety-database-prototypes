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
    res.redirect('./add-details');
  } else {
    res.status(204).end(); // <-- No redirect when not selected
  }
});


// Add business details  //
router.post('/add-business-details', function (req, res) {
  res.redirect('./add-address'); 
})

// Add address  //
router.post('/add-address', function (req, res) {
  res.redirect('./add-contact'); 
})

// Duplicate  //
router.post('/add-contact', function (req, res) {
  res.redirect('./business-blank'); 
})



// Manual //
router.post('/enter-details', function (req, res) {
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

// Edit Dream details //
router.post('/edit-details-dream', function (req, res) {
  res.redirect('./business-dreams'); 
})

// Edit Dream address //
router.post('/edit-address-dream', function (req, res) {
  res.redirect('./business-dreams'); 
})

// Edit Dream contact //
router.post('/edit-contact-dream', function (req, res) {
  res.redirect('./business-dreams'); 
})





// Edit Bartholomew //
router.post('/edit-business-details-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-details-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-address1-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-address2-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-contact-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-business-details-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-business-details-bartholomew', function (req, res) {
  res.redirect('./business-bartholomew?hide=true'); 
})

// Edit Bartholomew //
router.post('/edit-business-details-cunningham', function (req, res) {
  res.redirect('./business-cunningham'); 
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



// Duplicate  //
router.post('/test1', function (req, res) {
  res.redirect('./test2?hide=true'); 
})

// Duplicate  //
router.post('/test2', function (req, res) {
  res.redirect('./test1'); 
})


// Duplicate CH single //
router.post('/duplicate-business-ch-single', function (req, res) {
  res.redirect('./business-role'); 
})

// Duplicate CH single //
router.post('/duplicate-business-ch-multiple', function (req, res) {
  res.redirect('./business-role'); 
})

// Duplicate CH single //
router.post('/duplicate-business-add-single', function (req, res) {
  res.redirect('./business-role'); 
})

// Duplicate CH single //
router.post('/duplicate-business-add-multiple', function (req, res) {
  res.redirect('./business-role'); 
})



module.exports = router