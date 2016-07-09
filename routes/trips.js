var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');


var Trip = require('../models/trip.js')

/* GET trip page. */

router.post('/', function(req, res, next) {
  console.log('hello')

  var tripName = req.body.name;
  var start_date = req.body.startDate;
  var end_date = req.body.endDate;
  var destination = req.body.location;
  var adults = req.body.adults;
  var children = req.body.children;
  var room = req.body.room;

  var newTrip = Trip({
    startDate: start_date,
    endDate: end_date,
    rooms: room,
    adults: adults,
    children: children,
    destination: destination,
    concepts: null,
    amenities: null,
    tripProfile: null,
    tripName: tripName,
    tripDiscription: null
  });

  newTrip.save(function(err, response) {
    if (err) console.log(err);
    console.log(response._id)
    res.redirect('./trips/'+ response._id);
  })
});
/* GET trip page. */
router.get('/:_id', function(req, res, next) {
  var trip_id = req.params._id;
  request.get('http://localhost:3000/api/trips/' + trip_id, function(err, responce, body){
    res.json(JSON.parse(responce.body));
  })
})

module.exports = router;
