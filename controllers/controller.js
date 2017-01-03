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

router.get('/work-1', function(req, res){
  res.render('work-1');
});

router.get('/work-2', function(req, res){
  res.render('work-2');
});

router.get('/work-3', function(req, res){
  res.render('work-3');
});

router.get('/work-4', function(req, res){
  res.render('work-4');
});

router.get('/testfile', function(req, res){
  res.render('testfile');
});

module.exports = router;
