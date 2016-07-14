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

    console.log('-------------------------------------');
    console.log('concepts true: ',trip.concepts === []);
    console.log(typeof trip.concepts );
    console.log('-------------------------------------');

    if (trip.concepts && trip.concepts.length > 0){
      var concepts = "&concepts="  + trip.concepts.join(',')
    }else{
      var concepts = '';
    };
    if (trip.amenites && trip.amenites.length > 0){
      var amenites = "&amenites="  + trip.amenites.join(',')
    }else{
      var amenites = '';
    };


    var destination = trip.destination,
        rooms = trip.rooms,
        adults = trip.adults,
        children = trip.children,

        // make sure trip start and end are stored in a date format and working
        startDate = trip.startDate.toISOString(),
        endDate = trip.endDate.toISOString(),
        getPricing = true,
        bustCache = true;

    // create options for the Wayblazer api request
    var options = {
      "url":"https://api.wayblazer.com/v1/accommodations/search?" + "destination=" + destination +"&rooms="+ rooms + "&adults=" + adults + "&children=" + children + "&startDate="+ startDate + "&endDate=" + endDate  + "&getPricing=" + getPricing  + concepts + amenites +"&bustCache=" + bustCache,
      headers:{
        "x-api-key":API_KEY
      }

    }
    // send the reqest to the Wayblazer api and retunr the response as json
    request(options, function(error, response){
      console.log('url :',options.url);
      res.json(response);

    })
  })
})

module.exports = router;
