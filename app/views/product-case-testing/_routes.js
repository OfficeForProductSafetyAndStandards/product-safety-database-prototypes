const express = require('express')
const router = express.Router()

const strFullproductname = "Sony Vector 8000xc";
const strBrandName = "Sony";
const strProductName = "Vector 8000xc";
//const strModelName = "";
//const strCategory = "Electrical appliances and equipment";
const strModelNumber = '001-600006';
const strBarcode = 'EIN-12345334-44';
const strImageMain = '../public/images/hair-dryer.jpg';



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
  const iscovid = req.session.data['covid-related']

  if (iscovid == null) {
    res.redirect('/product-case-testing/is-this-case-related-to-covid-error' )
  } else {
    res.redirect('/product-case-testing/reason-for-creating-case' )
  }
})
router.post('/is-this-case-related-to-covid-error', function (req, res) {
  const iscoviderror = req.session.data['covid-related']

  if (iscoviderror != null) {
    res.redirect('/product-case-testing/reason-for-creating-case' )
  }
})
//********************* start reason-for-creating-case
router.post('/reason-for-creating-case', function (req, res) {
  const casereason = req.session.data['reason']

  if (casereason == null) {
    res.redirect('/product-case-testing/reason-for-creating-case-error' )
  } else if (casereason == 'issafeoption') {
      res.redirect('/product-case-testing/is-case-counterfeit' )
  } else {
    res.redirect('/product-case-testing/why-is-the-product-of-concern' )
  }
})
router.post('/reason-for-creating-case-error', function (req, res) {
  const casereasonerror = req.session.data['reason']

  if (casereasonerror != null) {
    res.redirect('/product-case-testing/why-is-the-product-of-concern' )
  }
})
//********************* why is the product of concern
router.post('/why-is-the-product-of-concern', function (req, res) {
  const safety = req.session.data['safety']

  if (safety == null) {
    res.redirect('/product-case-testing/why-is-the-product-of-concern-error' )
  } else if ((safety != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/product-case-testing/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/product-case-testing/is-case-counterfeit' )
  }
})
router.post('/why-is-the-product-of-concern-error', function (req, res) {
  if ((req.session.data['safety'] == null)) {
    res.redirect('/product-case-testing/why-is-the-product-of-concern-error' )
  } else if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/product-case-testing/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/product-case-testing/is-case-counterfeit' )
  }
})
router.post('/why-is-the-product-of-concern-error-2', function (req, res) {
  if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/product-case-testing/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/product-case-testing/is-case-counterfeit' )
  }
})
//******************* is-case-counterfeit
router.post('/is-case-counterfeit', function (req, res) {
  const counterfeit = req.session.data['counterfeit']

  if (counterfeit == null) {
    res.redirect('/product-case-testing/is-case-counterfeit-error' )
  } else {
    res.redirect('/product-case-testing/how-many-units-are-affected-std' )
  }
})
router.post('/is-case-counterfeit-error', function (req, res) {
  const counterfeiterror = req.session.data['counterfeit']

  if (counterfeiterror != null) {
    res.redirect('/product-case-testing/how-many-units-are-affected-std' )
  }
})
//************* start do-you-have-the-barcode
router.post('/do-you-have-the-barcode', function (req, res) {

  var theBarCode = req.session.data['barcode']
  var theBarNumberP = req.session.data['barnumber'].replace(/\D/g,'');

  if (theBarCode == 'yes') {


      if(theBarNumberP == '123456789'){
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
  return res.redirect('/product-case-testing/does-the-product-have-marking')
})
//************* start does-the-product-have-marking
router.post('/does-the-product-have-marking', function (req, res) {
  //var marking = req.session.data['marking']

  var fullproductnameOurProduct = strFullproductname; //.toLowerCase().replace(/\s/g, '')
  var brandNameOurProduct = strBrandName;
  var productNameOurProduct = strProductName;
  //var modelNameOurProduct = strModelName;
  //var categoryOurProduct = strCategory;
  var modelnumberOurProduct = strModelNumber.replace(/\D/g,'');

  var fullproductname1 = req.session.data['fullproductname']  //.toLowerCase().replace(/\s/g, '')
  var brandName1 = req.session.data['brandName']
  var productName1 = req.session.data['productName']
  //var modelName1 = req.session.data['modelName']
  //var categoryText = req.session.data['category']
  var modelnumber1 = req.session.data['modelnumber'].replace(/\D/g,'');


  if (fullproductname1 == fullproductnameOurProduct){
    return res.redirect('/product-case-testing/might-already-exist')
  }else if((brandName1 == brandNameOurProduct) && (productName1 == productNameOurProduct)){
    return res.redirect('/product-case-testing/might-already-exist')
  }else if(modelnumber1 == modelnumberOurProduct){
    return res.redirect('/product-case-testing/might-already-exist')
  }else{
    return res.redirect('/product-case-testing/describe-the-product')
  }

})


// *********************** start might-already-exist
router.get('/might-already-exist', function (req, res) {
  res.render('product-case-testing/might-already-exist', { thisFullproductname: strFullproductname, thisBrand: strBrandName, thisCategory: 'Electrical appliances and equipment', thisSubcategory: 'Domestic electricals', thisModelNumber: strModelNumber, thisBarcode: strBarcode, thisDescription: 'The product description lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat quam sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in libero urna. Nulla ut rhoncus magna, sagittis dapibus justo. Nullam blandit lacus et dui scelerisque, vel pretium lectus vulputate. In et ultrices sapien. Quisque pharetra, tortor scelerisque accumsan rhoncus, sem quam fermentum dui, non ornare neque mi ac justo.', thisImage: strImageMain })
})

router.post('/might-already-exist', function (req, res) {
  var isit = req.session.data['isit']

  if (isit == 'yes') {
    res.redirect('/product-case-testing/it-was-your-product')
  } else if (isit == 'no') {
    res.redirect('/product-case-testing/describe-the-product')
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
    res.redirect('/product-case-testing/success-product-added')
  }
})
//****************** success-product-added
router.post('/success-product-added', function (req, res) {
  if (req.session.data['createcase'] == 'yes') {
    res.redirect('/product-case-testing/is-this-case-related-to-covid')
  } else {
    res.redirect('/product-case-testing/products-page')
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
  if ((req.session.data['imagetitle'] == '') || (req.session.data['imagedesc'] == '')) {
    res.redirect('/product-case-testing/upload-a-product-image-error')
  } else {
    res.redirect('/product-case-testing/upload-a-product-image-success')
  }
})
router.post('/upload-a-product-image-error', function (req, res) {
  if ((req.session.data['imagetitle'] == '') || (req.session.data['imagedesc'] == '')){
    res.redirect('/product-case-testing/upload-a-product-image-error')
  } else {
    res.redirect('/product-case-testing/upload-a-product-image-success')
  }
})
//************ start upload-a-product-image-success
router.post('/upload-a-product-image-success', function (req, res) {
  const valanother = req.session.data['another']

  if (valanother == null) {
    res.redirect('/product-case-testing/upload-a-product-image-success-error')
  } else if (valanother == 'yes') {
    res.redirect('/product-case-testing/upload-a-product-image-with-imgs')
  } else if (valanother == 'no') {
    res.redirect('/product-case-testing/success-product-added')
  }
})
router.post('/upload-a-product-image-success-error', function (req, res) {
  const another4 = req.session.data['another']

  if (another4 == null) {
    res.redirect('/product-case-testing/upload-a-product-image-success-error')
  } else if (another4 == 'yes') {
    res.redirect('/product-case-testing/upload-a-product-image-with-imgs')
  } else if (another4 == 'no') {
    res.redirect('/product-case-testing/success-product-added')
  }
})
//************ upload-a-product-image-with-imgs
router.post('/upload-a-product-image-with-imgs', function (req, res) {
  const val2 = req.session.data['another']

  if (val2 == null) {
    res.redirect('/product-case-testing/upload-a-product-image-error')
  } else if (val2 == 'yes') {
    res.redirect('/product-case-testing/upload-a-product-image-with-imgs')
  } else if (val2 == 'no') {
    res.redirect('/product-case-testing/success-product-added')
  }
})
//************ start remove-a-product-image-success
router.post('/remove-a-product-image-success', function (req, res) {
  const valanother2 = req.session.data['another']

  if (valanother2 == null) {
    res.redirect('/product-case-testing/remove-a-product-image-success-error')
  } else if (valanother2 == 'yes') {
    res.redirect('/product-case-testing/upload-a-product-image')
  } else if (valanother2 == 'no') {
    res.redirect('/product-case-testing/success-product-added')
  }
})
router.post('/remove-a-product-image-success-error', function (req, res) {
  const another5 = req.session.data['another']

  if (another5 == null) {
    res.redirect('/product-case-testing/remove-a-product-image-success-error')
  } else if (another5 == 'yes') {
    res.redirect('/product-case-testing/upload-a-product-image')
  } else if (another5 == 'no') {
    res.redirect('/product-case-testing/success-product-added')
  }
})
//****************** success-case-created
router.post('/success-case-created', function (req, res) {
  const casecreated = req.session.data['casecreated']

  if (casecreated == null) {
    res.redirect('/product-case-testing/success-case-created-error')
  } else if (casecreated == 'no') {
    res.redirect('/product-case-testing/cases-page')
  } else {
    res.redirect('/product-case-testing/add-product-to-case')
  }
})
router.post('/success-case-created-error', function (req, res) {
  const casecreated2 = req.session.data['casecreated']

  if (casecreated2 == null) {
    res.redirect('/product-case-testing/success-case-created-error')
  } else if (casecreated2 == 'no') {
    res.redirect('/product-case-testing/cases-page')
  }else{
    res.redirect('/product-case-testing/add-product-to-case')
  }
})



module.exports = router