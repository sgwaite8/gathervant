var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');

router.post('/', function(req, res, next) {
  res.send('Go here to save a trip');
});
/* GET trip page. */
router.get('/:_id', function(req, res, next) {
  var trip_id = req.params._id;
  request.get('http://localhost:3000/api/trips/' + trip_id, function(err, responce, body){
    res.json(JSON.parse(responce.body));
  })
})

module.exports = router;
