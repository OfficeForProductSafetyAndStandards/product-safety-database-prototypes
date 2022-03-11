const express = require('express')
const router = express.Router()

/*const strFullproductname = "Sony Vector 8000xc";
const strBrandName = "Sony";
const strProductName = "Vector 8000xc";
//const strModelName = "";
//const strCategory = "Electrical appliances and equipment";
const strModelNumber = '001-600006';
const strBarcode = 'EIN-12345334-44';
const strImageMain = '../public/images/hair-dryer.jpg';*/



//************* routes for /product-case-testing ************* starts

router.post('/find-the-product', function (req, res) {
  var isrelated = req.session.data['related']

 if (isrelated == 'yes') {
      res.redirect('/product-case-testing/products-page')
  } else if (isrelated == 'no') {
    res.redirect('/product-case-testing/is-this-case-related-to-covid')
  }
})
//************* is-this-case-related-to-covid ************* starts
router.post('/is-this-case-related-to-covid', function (req, res) {
  res.redirect('/product-case-testing/reason-for-creating-case')
})
//********************* start reason-for-creating-case
router.post('/reason-for-creating-case', function (req, res) {
  const casereason = req.session.data['reason']

if (casereason == 'unsafeoption') {
      res.redirect('/product-case-testing/is-case-counterfeit' )
  } else {
    res.redirect('/product-case-testing/why-is-the-product-of-concern' )
  }
})
//********************* why is the product of concern
router.post('/why-is-the-product-of-concern', function (req, res) {
  res.redirect('/product-case-testing/is-case-counterfeit' )
})

//******************* is-case-counterfeit
router.post('/is-case-counterfeit', function (req, res) {
  //res.redirect('/product-case-testing/how-many-units-are-affected-std' )
  res.redirect('/product-case-testing/success-case-created' )
})
//************* start do-you-have-the-barcode
router.post('/do-you-have-the-barcode', function (req, res) {

  var theBarCode = req.session.data['barcode']
  //var theBarNumberP = req.session.data['barnumber'].replace(/\D/g,'');
  var didItMatch = req.session.data['checkMatch']

  if (theBarCode == 'yes') {

      if(didItMatch == 'yes'){
        res.redirect('/product-case-testing/might-already-exist-bc')
      }else{
        res.redirect('/product-case-testing/what-is-the-product-name')
      }

  } else if (theBarCode == 'no') {
    res.redirect('/product-case-testing/what-is-the-product-name')
  }

})
// *********************** start might-already-exist-bc
router.post('/might-already-exist-bc', function (req, res) {
  var isit = req.session.data['isit']

  if (isit == null) {
    res.redirect('/product-case-testing/might-already-exist-bc-error')
  } else if (isit == 'yes') {
    res.redirect('/product-case-testing/it-was-your-product')
  } else if (isit == 'no') {
    res.redirect('/product-case-testing/what-is-the-product-name')
  }
})
router.post('/might-already-exist-bc-error', function (req, res) {
  var isit2 = req.session.data['isit']

  if (isit2 == null) {
    res.redirect('/product-case-testing/might-already-exist-bc-error')
  } else if (isit2 == 'yes') {
    res.redirect('/product-case-testing/it-was-your-product')
  } else if (isit2 == 'no') {
    res.redirect('/product-case-testing/what-is-the-product-name')
  }
})
//************* start does-the-product-have-a-brand
/*router.post('/does-the-product-have-a-brand', function (req, res) {
  var branded = req.session.data['branded']
  var brand = req.session.data['brand']

  if (branded == null) {
    return res.redirect('/product-case-testing/does-the-product-have-a-brand-error')
  } else if ((branded == 'yes') && (brand == '')) {
    return res.redirect('/product-case-testing/does-the-product-have-a-brand-error-2')
  } else {
    return res.redirect('/product-case-testing/what-is-the-product-name')
  }
})
router.post('/does-the-product-have-a-brand-error', function (req, res) {
  var branded1 = req.session.data['branded']
  var brand1 = req.session.data['brand']

  if (branded1 == null) {
    return res.redirect('/product-case-testing/does-the-product-have-a-brand-error')
  } else if ((branded1 == 'yes') && (brand1 == '')) {
    return res.redirect('/product-case-testing/does-the-product-have-a-brand-error-2')
  } else if ((branded1 == 'yes') && (brand1 != '')) {
    return res.redirect('/product-case-testing/what-is-the-product-name')
  }
})
router.post('/does-the-product-have-a-brand-error-2', function (req, res) {
  var branded2 = req.session.data['branded']
  var brand2 = req.session.data['brand']

  if (branded2 == null) {
    return res.redirect('/product-case-testing/does-the-product-have-a-brand-error')
  } else if ((branded2 == 'yes') && (brand2 == '')) {
    return res.redirect('/product-case-testing/does-the-product-have-a-brand-error-2')
  } else if ((branded2 == 'yes') && (brand2 != '')) {
    return res.redirect('/product-case-testing/what-is-the-product-name')
  }
})*/
//************* what is the product name
router.post('/what-is-the-product-name', function (req, res) {
    return res.redirect('/product-case-testing/what-is-the-product-category')
})
//************* start what-is-the-product-category
router.post('/what-is-the-product-category', function (req, res) {

  var checkMatch1 = req.session.data['checkMatch']
  var theMatch1 = req.session.data['theMatch']

  if (checkMatch1 == 'yes'){
    return res.redirect('/product-case-testing/might-already-exist')
  }else{
    return res.redirect('/product-case-testing/does-the-product-have-marking')
  }

})
//************* start does-the-product-have-marking
router.post('/does-the-product-have-marking', function (req, res) {
  return res.redirect('/product-case-testing/describe-the-product')
})
// *********************** start might-already-exist
/*router.get('/might-already-exist', function (req, res) {
  var thisFullproductname = "blah";
  res.render('product-case-testing/might-already-exist', { thisFullproductname: strFullproductname, thisBrand: strBrandName, thisCategory: 'Electrical appliances and equipment', thisSubcategory: 'Domestic electricals', thisModelNumber: strModelNumber, thisBarcode: strBarcode, thisDescription: 'The product description lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat quam sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in libero urna. Nulla ut rhoncus magna, sagittis dapibus justo. Nullam blandit lacus et dui scelerisque, vel pretium lectus vulputate. In et ultrices sapien. Quisque pharetra, tortor scelerisque accumsan rhoncus, sem quam fermentum dui, non ornare neque mi ac justo.', thisImage: strImageMain })
})

and then in the page just use {{ thisBrand }} as normal. And this for an image in the HTML...
<img src={%raw%}"{%endraw%}{{ thisImage }}{%raw%}"{%endraw%} class="opss-details-img" alt="Sony hair dryer">
*/

router.post('/might-already-exist', function (req, res) {
  var isit = req.session.data['isit']

  if (isit == 'yes') {
    res.redirect('/product-case-testing/it-was-your-product')
  } else if (isit == 'no') {
    res.redirect('/product-case-testing/does-the-product-have-marking')
  }
})
//************* start describe-the-product
router.post('/describe-the-product', function (req, res) {
  res.redirect('/product-case-testing/when-was-the-product-placed')
})
//************* start when-was-the-product-placed
router.post('/when-was-the-product-placed', function (req, res) {
  res.redirect('/product-case-testing/can-you-provide-an-image')
})

//****************** can-you-provide-an-image
router.post('/can-you-provide-an-image', function (req, res) {
  if (req.session.data['productimage'] == 'yes') {
    res.redirect('/product-case-testing/upload-a-product-image')
  } else {
    res.redirect('/product-case-testing/product-created-confirmation')
  }
})
//****************** success-product-added
router.post('/success-product-added', function (req, res) {
  var imgdefault = req.session.data['defaultimg']

  if (imgdefault != null) {
    res.redirect('/product-case-testing/product-created-confirmation')
  }

})
//****************** it-was-your-product
router.post('/it-was-your-product', function (req, res) {
  if (req.session.data['createcase'] == 'yes') {
    res.redirect('/product-case-testing/is-this-case-related-to-covid')
  } else {
    res.redirect('/product-case-testing/products-page')
  }
})
//************ start upload-a-product-image
router.post('/upload-a-product-image', function (req, res) {
  res.redirect('/product-case-testing/upload-a-product-image-success')
})
//************ start upload-a-product-image-success
router.post('/upload-a-product-image-success', function (req, res) {
  const valanother = req.session.data['another']
  const valmax = req.session.data['max']

 
  if (valanother == 'anotherimage') {
    if (valmax == 'yes') {
      res.redirect('/product-case-testing/blank-no-more-images')
    } else {
      res.redirect('/product-case-testing/upload-a-product-image')
    }
    
  } else if (valanother == 'no') {
    if (valmax == 'yes') {
      res.redirect('/product-case-testing/success-product-added')//xxxxxxxxxxxxxxxxxxxxxxxxxxx
    }else{
      res.redirect('/product-case-testing/product-created-confirmation')//xxxxxxxxxxxxxxxxxxxxxxxxxxx 
    }
  }
})
//************ start remove-a-product-image-success
router.post('/remove-a-product-image-success', function (req, res) {
  const valanother2 = req.session.data['another']
  const valmax2 = req.session.data['max']

  if (valanother2 == 'anotherimage') {
    if (valmax2 == 'yes') {
      res.redirect('/product-case-testing/blank-no-more-images')
    } else {
      res.redirect('/product-case-testing/upload-a-product-image')
    }    
  } else if (valanother2 == 'no') {
    if (valmax2 == 'yes') {
      res.redirect('/product-case-testing/success-product-added')
    }else{
      res.redirect('/product-case-testing/product-created-confirmation')
    }
  }
})
//****************** success-case-created
router.post('/success-case-created', function (req, res) {
  const casecreated = req.session.data['casecreated']

  if (casecreated == 'no') {
    res.redirect('/product-case-testing/cases-page')
  } else {
    res.redirect('/product-case-testing/add-a-product-to-a-case?ref=20-2120')
  }
})


module.exports = router