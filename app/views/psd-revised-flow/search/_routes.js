const express = require('express')
const router = express.Router()

router.post('/your-name', function (req, res) {
  res.redirect('./your-account'); 
})

router.post('/your-account', function (req, res) {
  res.redirect('./your-name'); 
})

router.post('/notifications', function (req, res) {
  res.redirect('./task-list'); 
})

module.exports = router