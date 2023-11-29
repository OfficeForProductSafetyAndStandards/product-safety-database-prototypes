const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// **** Start folder specific routes


//COS drafts/tasks prototype
//router.use('/cos-tasks-proto', require('./views/cos-tasks-proto/_routes'));

// old add-product-v4
router.use('/add-product-v4', require('./views/add-product-v4/_routes'));

// current sprint, remember to add older sprint when adding a new folder!
router.use('/create-cases-add-products', require('./views/create-cases-add-products/_routes'));
router.use('/drafts-gui', require('./views/drafts-gui/_routes'));
router.use('/product-case-testing', require('./views/product-case-testing/_routes'));


// Prototype v5

router.post('/product-triage-5', function(request, response) {

   var triage = request.session.data['product-triage']
if (triage == "yes") {
    response.redirect("../prism/task-list-v2")
} else if (triage == "no") {
    response.redirect("../prism/question-triage")
} else if (triage == "notclear") {
    response.redirect("../prism/triage-guidance")
}
})

router.post('/product-triage-5-b', function(request, response) {

   var triage = request.session.data['product-triage']
if (triage == "yes") {
    response.redirect("../prism/prism-login")
} else if (triage == "notclear") {
    response.redirect("../prism/triage-guidance-pre-login")
}
})

router.post('/product-triage-5-al', function(request, response) {

   var triage = request.session.data['product-triage']
if (triage == "yes") {
    response.redirect("../prism/task-list-v2")
} else if (triage == "notclear") {
    response.redirect("../prism/triage-guidance-pre-login")
}
})



router.post('/product-triage-5a', function(request, response) {

   var triage = request.session.data['product-triage-a']
if (triage == "yes") {
    response.redirect("version_5/triage-guidance")
} else  {
    response.redirect("version_5/prism-login")
}
})

router.post('/product-serious-risk-5', function(request, response) {

    var srisk = request.session.data['serious-risk']
    if (srisk == "no"){
        response.redirect("../../prism//question-triage-a")
    } else {
        response.redirect("version_5/serious-risk-rebuttable")
    }
})

router.post('/product-serious-risk-5-b', function(request, response) {

    var srisk = request.session.data['serious-risk']
    if (srisk == "no"){
        response.redirect("../../prism/question-triage-b")
    } else {
        response.redirect("../../prism/serious-risk-rebuttable")
    }
})

router.post('/product-serious-risk-5-al', function(request, response) {

    var srisk = request.session.data['serious-risk']
    if (srisk == "no"){
        response.redirect("../../prism/task-list-v2")
    } else {
        response.redirect("../../prism/serious-risk-rebuttable")
    }
})

router.post('/product-search-5', function(req,res){
    var brand = req.session.data['model'];
    if (brand.includes("XYZ")) {
       res.redirect('version_5/product-search-no-results');
    }
    else {
        res.redirect('version_5/product-search-results')
    }

});

router.post('/rebuttable-5', function(request, response) {

    var srisk = request.session.data['rebuttable']
    if (srisk == "no"){
        response.redirect("version_5/task-list-serious-risk")
    } else {
        response.redirect("version_5/task-list-serious-risk")
    }
})

router.post('/pre-product-search', function(request, response) {

    var srisk = request.session.data['pre-product-search']
    if (srisk == "no"){
        response.redirect("version_5/product-search")
    } else {
        response.redirect("version_5/product-ref-number")
    }
})

router.post('/prism-login-5', function(request, response) {

    var credentials = request.session.data['username']
    if (credentials == "psd"){
        response.redirect("version_5/prism-assessments-dashboard")
    } else {
        response.redirect("version_5/question-serious-risk")
    }
})


router.post('/product-search-route', function(request, response) {

    var rchoice = request.session.data['psd-ref']
    if (rchoice == "psd-345"){
        response.redirect("version_5/product-search-results-psd")
    } else {
        response.redirect("version_5/product-search-results")
    }
})

router.post('/product-overall-risk-decision', function(request, response) {

    var prisk = request.session.data['product-overall-risk']
    if (prisk == "risk"){
        response.redirect("version_5/product-overall-risk-option-1")
    }
    else if (prisk == "multiple") {
        response.redirect("version_5/combine-risks-1")
    }
    else if (prisk == "risklabel") {
        response.redirect("version_5/combine-risks")
    }
})

router.post('/product-overall-risk-decision-1', function(request, response) {

    var prisk = request.session.data['product-overall-risk-1']
    if (prisk == "risk"){
        response.redirect("version_5/product-overall-risk-option-1a")
    }
    else if (prisk == "multiple") {
        response.redirect("version_5/combine-risks-1")
    }
    else if (prisk == "risklabel") {
        response.redirect("version_5/combine-risks-a")
    }
})

router.post('/product-safety', function(request, response) {

   var psafety = request.session.data['product-safety-choice']
if (psafety == "nc") {
    response.redirect("/psd-products-area/multiple-products/create-case")
} else if (psafety == "unsafe") {
    response.redirect("../psd-products-area/multiple-products/no-upload-unsafe")
}
else if (psafety == "mixed") {
    response.redirect("../psd-products-area/multiple-products/no-upload-mix")
}
})

router.post('/test-report-choice', function(request, response) {

   var treport = request.session.data['test-report-choice']
if (treport == "yes") {
    response.redirect("../psd-cases-area/notifications/test-certificate")
} else  {
    response.redirect("../psd-cases-area/notifications/test-results")
}
})


// **** End folder specific routes

module.exports = router



