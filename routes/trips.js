var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');


var Trip = require('../models/trip.js')

/* GET trip page. */

router.post('/', function(req, res, next) {


  var tripName = req.body.name,
      start_date = formatDate(req.body.startDate),
      end_date = formatDate(req.body.endDate),
      destination = req.body.location,
      adults = req.body.adults,
      children = req.body.children,
      tripProfile = 'none'
      room = req.body.room;

      console.log(req.body.adults, req.body.children, req.body.room)
  var newTrip = Trip({
    startDate: start_date,
    endDate: end_date,
    rooms: room,
    adults: adults,
    children: children,
    destination: destination,
    concepts: [],
    amenities: [],
    tripProfile: '',
    tripName: tripName,
    tripDiscription: ''
  });


  newTrip.save(function(err, response) {
    if (err) console.log(err);
    console.log(response)
    res.redirect('./trips/'+ response._id);
  })
});
/* GET trip page. */
router.get('/:_id', function(req, res, next) {
  var trip_id = req.params._id;

  Trip.find({
    _id: trip_id
  }, function(err, data) {
    if (err) console.log(err);

    request.get('http://localhost:3000/api/trips/' + trip_id, function(err, response, body){
      var blazerBody = JSON.parse(response.body).body,
          blazerObj = JSON.parse(blazerBody)

      // console.log('body:'+ Object.keys(blazerObj.accommodations[0].image.urls.original))
      console.log('DB:'+ data)
      res.render('trip', {
          data: data,
          response: response,
          accommodations: blazerObj.accommodations,
        });
    })
  })
})

  router.put('/:id', function(req, res) {
    var id = req.params.id;

    Trip.findById(id, function (err, trip) {
      if (err) return console.log(err);
      // req.body.<name> is from data from ajax call from update.js on client side
      // if statments are because start and end date are required if included
      if(req.body.startDate){
        trip.startDate = req.body.startDate;
      };
      if(req.body.endDate){
        trip.endDate = req.body.endDate;
      }
      trip.rooms = req.body.rooms;
      trip.adults = req.body.adults;
      trip.children = req.body.children;
      trip.concepts = req.body.concepts;

      trip.save(function (err, data) {
        if (err) return console.log(err);

        res.json(data);
      })
    });
  });


function formatDate(date){
  date = date.split('-');
  var newDate =  new Date(date[0], date[1] - 1, date[2])
  return newDate
}


module.exports = router;
