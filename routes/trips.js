var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');

/* GET trip page. */
router.post('/', function(req, res, next) {
  res.send('Go here to save a trip');
});

router.get('/:_id', function(req, res, next) {
  var trip_id = req.params._id;
  res.send("view trip: " + trip_id)
})

module.exports = router;
