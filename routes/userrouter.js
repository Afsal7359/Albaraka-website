var express = require('express');
const usercontroller = require('../controllers/usercontroller');
var router = express.Router();

/* GET home page. */
router.get('/', usercontroller.userHome);

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('user/about');
});

/* GET Blog page. */
router.get('/blog', function(req, res, next) {
  res.render('user/blog');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('user/contact');
});

/* GET gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('user/gallery');
});

/* GET service page. */
router.get('/services', function(req, res, next) {
  res.render('user/service');
});


module.exports = router;
