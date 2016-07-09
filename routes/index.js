var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var router = express.Router();
var API_KEY = process.env.Wayblazer_API_KEY
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  // request({
  //    method: 'GET',
  //    uri: 'https://api.wayblazer.com/sandbox/accommodations/detail/bjY3PN3XF28MDrdimgYRl9laRkIRU9IG1FerHgFV',
  //    qs: {
  //     "id": "e7baa053-09e9-4736-b953-bc83f02b6904",
  //     "adults": 2,
  //     "children": 0,
  //     "rooms": 1,
  //     "startDate": "2016-07-22T05:00:00.000Z",
  //     "endDate": "2016-07-29T05:00:00.000Z",
  //     "tripType": "couple",
  //     "getPricing": "true",
  //     "format": 'json'}
  //    //headers: {encoding: 'utf8', 'Content-type': 'application/xml'}
  //  }, function(error, response, body) {
  //    if (error) throw error;
  //    var test = body;
  //    console.log(typeof test);
  //    test = JSON.parse(test);
  //    console.log(test);
  //  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
