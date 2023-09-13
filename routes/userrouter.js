var express = require('express');
const usercontroller = require('../controllers/usercontroller');
var router = express.Router();

/* GET home page. */
router.get('/', usercontroller.userHome);

/* GET About page. */
router.get('/about',usercontroller.userabout );

/* GET gallery page. */
router.get('/gallery',usercontroller.usergallery);

/* GET Gifting page. */
router.get('/gifting',usercontroller.usergifting );

// GET  Blog Page
router.get('/blog',usercontroller.userblog);

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('user/contact');
});



/* GET service page. */
router.get('/services', function(req, res, next) {
  res.render('user/service');
});


module.exports = router;
