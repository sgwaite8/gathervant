var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');

router.get('/trips/:_id', function(req, res, next) {
  var trip_id = req.params._id;

  var destination = "austin,tx",
      rooms = '2',
      adults = '4',
      children = '2',
      startDate = '2016-07-25',
      endDate = '2016-07-30',
      getPricing = true;

  var options = {
    "url":"https://api.wayblazer.com/sandbox/accommodations/search?" + "destination=" + destination +"&rooms="+ rooms + "&adults=" + adults + "&children=" + children + "&startDate=" + startDate + "&endDate=" + endDate + "&getPricing=" + getPricing ,
    headers:{
      "x-api-key":API_KEY
    }
  }

  request(options, function(err, response, body ){
    console.log("err : " + err);
    console.log("body : " + body );
    res.json(response)
  })
})

module.exports = router;
