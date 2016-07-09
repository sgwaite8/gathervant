var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var router = express.Router();

var Trip = require('../models/trip.js')

/* GET home page. */
router.get('/', function(req, res, next) {

  Trip.find({}, function(err, data){
    if (err) console.log(err);
    console.log(data[data.length-1])
  })

  res.render('index', { title: 'Express' });
});

router.get('/trips', function(req, res, next) {

  Trip.find({}, function(err, data){
    if (err) console.log(err);
    console.log(data);
  })

  res.render('index', { title: 'Express' });
});


module.exports = router;
