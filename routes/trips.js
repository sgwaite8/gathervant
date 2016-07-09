var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send('Go here to save a trip');
});

router.get('/:_id', function(req, res, next) {
  var trip_id = req.params._id;
  res.send("view trip: " + trip_id)
})

module.exports = router;
