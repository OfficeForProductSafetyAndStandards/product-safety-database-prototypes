const express = require('express')
const router = express.Router()

// Search or add a business //
router.post('/your-name', function (req, res) {
  res.redirect('./your-account'); 
})

// Search or add a business //
router.post('/your-account', function (req, res) {
  res.redirect('./your-name'); 
})

// Search or add a business //
router.post('/notifications', function (req, res) {
  res.redirect('./task-list'); 
})




module.exports = router