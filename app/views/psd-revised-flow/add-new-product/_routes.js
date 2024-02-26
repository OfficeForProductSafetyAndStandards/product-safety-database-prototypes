const express = require('express')
const router = express.Router()

// Search to barcode //
router.post('/search-products-barcode', function (req, res) {
  res.redirect('./do-you-have-barcode'); 
})

// Search to laptop //
router.post('/search-products-laptop', function (req, res) {
  res.redirect('./added-product'); 
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

// Happy photo BL //
router.post('/happy-photo-bl', function (req, res) {
  const happyPhoto = req.session.data['happy-with-photo'];
  if (happyPhoto === 'yes') {
    res.redirect('./add-product-information-bl');
  } else {
    res.redirect('./add-a-photo-bl');
  }
});

// Add product information //
router.post('/add-product-information', function (req, res) {
  res.redirect('./product-manual'); 
})

// Add product information //
router.post('/product-manual', function (req, res) {
  res.redirect('./added-product-manual'); 
})


// Added product //
router.post('/added-product', function (req, res) {
  const addedProduct = req.session.data['addedProduct'];
  if (addedProduct === 'yes') {
    res.redirect('./search-products');
  } else if (addedProduct === 'no') {
    res.redirect('./task-list-finish');
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
  const notFound = req.session.data['not-found-it'];
  if (notFound === 'yes') {
    res.redirect('./added-product-bl');
  } else {
    res.redirect('./do-you-have-barcode');
  }
});

// Product from PSD //
router.post('/product-psd', function (req, res) {
  const notFound = req.session.data['not-found-it'];
  if (notFound === 'yes') {
    res.redirect('./added-product');
  } else {
    res.redirect('./do-you-have-barcode');
  }
});


// Multiple products //
router.post('/multiple-products', function (req, res) {
  res.redirect('./product-bl'); 
})


// Edit product information PSD //
router.post('/edit-product-information-manual', function (req, res) {
  res.redirect('./product-manual'); 
})

// Edit product information BL //
router.post('/edit-product-information-bl', function (req, res) {
  res.redirect('./product-bl'); 
})

// Duplicate //
router.post('/duplicate', function (req, res) {
  const whichOne = req.session.data['which-one'];
  if (whichOne === 'yes') {
    res.redirect('./product-manual');
  } else if (whichOne === 'no') {
    res.redirect('./product-psd');
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


// Edit product information BL //
router.post('/add-a-photo', function (req, res) {
  res.redirect('./add-product-information'); 
})

// Add a barcode //
router.post('/add-a-barcode', function (req, res) {
  res.redirect('./happy-photo-bl'); 
})


// --- 1 ---
router.post(/test/, (req, res) => {

  if (!req.session.data['case-search-term']) {
    req.session.data['case-search-null'] = 1;
    res.redirect('test') // Try again
  } else {
    delete req.session.data['case-search-null'];
    res.redirect('test2')
  }

});

module.exports = router