var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');


var Trip = require('../models/trip.js')

/* GET trip page. */

router.post('/', function(req, res, next) {

  var tripName = req.body.name;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;
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
    concepts: [],
    amenities: [],
    tripProfile: '',
    tripName: tripName,
    tripDiscription: ''
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

  Trip.find({
    _id: trip_id
  }, function(err, data) {
    if (err) console.log(err);
    console.log(data);
    // res.send('test');
    request.get('http://localhost:3000/api/trips/' + trip_id, function(err, response, body){
      res.render('trip', {
          data: data,
          response: response
        });
    })
  })
})

  // router.put('/:id', function(req, res) {
  //   var id = req.params.id;

  //   Trip.findById(id, function (err, trip) {
  //     if (err) return handleError(err);
  //     trip.startDate = req.body.//<form name>;
  //     trip.endDate =
  //     trip.rooms =
  //     trip.adults =
  //     trip.children =
  //     trip.concepts =
  //     trip.amenities =


  //     trip.save(function (err, data) {
  //       if (err) return handleError(err);
  //       res.redirect('/:id');
  //   })
  //     });
  //   });
  // });

// });


module.exports = router;
