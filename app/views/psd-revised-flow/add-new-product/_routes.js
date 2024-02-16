const express = require('express')
const router = express.Router()

// Search to barcode //
router.post('/search-products-barcode', function (req, res) {
  res.redirect('./do-you-have-barcode'); 
})

// Search to laptop //
router.post('/search-products-laptop', function (req, res) {
  res.redirect('./added-product-2'); 
})


// Multiple products //
router.post('/multiple-products', function (req, res) {
  res.redirect('./product-bl'); 
})

// Happy photo //
router.post('/happy-photo', function (req, res) {
  const happyPhoto = req.session.data['happy-with-photo'];
  if (happyPhoto === 'yes') {
    res.redirect('./add-product-information');
  } else {
    res.redirect('./add-a-photo');
  }
});

// Add product information //
router.post('/add-product-information', function (req, res) {
  res.redirect('./added-product-3'); 
})


// Added product //
router.post('/added-product', function (req, res) {
  const addedProduct = req.session.data['addedProduct'];
  if (addedProduct === 'yes') {
    res.redirect('./task-list-finish');
  } else if (addedProduct === 'no') {
    res.redirect('./search-products');
  } else {
    res.status(204).end(); 
  }
});

// Not found //
router.post('/not-found', function (req, res) {
  const notFound = req.session.data['not-found-it'];
  if (notFound === 'yes') {
    res.redirect('./add-a-barcode');
  } else {
    res.redirect('./add-product-information');
  }
});

// Product from Barcode Lookup //
router.post('/product-bl', function (req, res) {
  res.redirect('./added-product'); 
})

// Product from PSD //
router.post('/product-psd', function (req, res) {
  res.redirect('./added-product'); 
})

// Edit product information PSD //
router.post('/edit-product-information-psd', function (req, res) {
  res.redirect('./product-psd'); 
})

// Edit product information BL //
router.post('/edit-product-information-bl', function (req, res) {
  res.redirect('./product-bl'); 
})

// Duplicate //
router.post('/duplicate', function (req, res) {
  const whichOne = req.session.data['which-one'];
  if (whichOne === 'yes') {
    res.redirect('./added-product-3');
  } else if (whichOne === 'no') {
    res.redirect('./added-product');
  } else {
    res.status(204).end(); 
  }
});

// Do you have a barcode //
router.post('/do-you-have-barcode', function (req, res) {
  const haveBarcode = req.session.data['have-barcode'];
  if (haveBarcode === 'yes') {
    res.redirect('./add-a-barcode');
  } else if (haveBarcode === 'no') {
    res.redirect('./add-a-photo');
  } else {
    res.status(204).end(); // <-- No redirect when not selected
  }
});

module.exports = router