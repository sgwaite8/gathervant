var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Trip = require('../models/trip');
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');

router.get('/trips/:_id', function(req, res, next) {
  var trip_id = req.params._id;
  // get the trip from _id
  Trip.findById(trip_id, function(err, trip) {
    // if concepts or amenities are null set them to an empty string
    trip.concepts ? concepts = trip.concepts.join(',') : concepts = '';
    trip.amenities ? amenities = trip.amenities.join(',') : amenities = '';
    console.log(trip);
    var destination = trip.destination,
        rooms = trip.rooms,
        adults = trip.adults,
        children = trip.children,

        // make sure trip start and end are stored in a date format and working
        startDate = trip.startDate.toISOString(),
        endDate = trip.endDate.toISOString(),
        getPricing = true;

        // console.log(startDate.toISOString());
    // create options for the Wayblazer api request
    var options = {
      "url":"https://api.wayblazer.com/sandbox/accommodations/search?" + "destination=" + destination +"&rooms="+ rooms + "&adults=" + adults + "&children=" + children + "&startDate="+ startDate + "&endDate=" + endDate  + "&getPricing=" + getPricing +"&concepts=" + concepts + "&amenities=" + amenities ,
      headers:{
        "x-api-key":API_KEY
      }
    }
    // send the reqest to the Wayblazer api and retunr the response as json
    request(options, function(error, response){
      res.json(response);
    })
  })
})

module.exports = router;
