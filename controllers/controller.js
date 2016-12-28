var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
  res.render('index');
});

router.get('/portfolio', function(req, res){
  res.render('portfolio');
});

router.get('/contact', function(req, res){
  res.render('contact');
});

router.get('/about', function(req, res){
  res.render('about');
});



module.exports = router;
