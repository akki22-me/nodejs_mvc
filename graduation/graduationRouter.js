var express = require('express');
var router = express.Router();
var graduationcontroller = require('./graduationController');
var validate = require('./graduationHelper');
var formvalidate = validate.graduationform;

//add graduation detail
router.post('/add_graduation_detail',formvalidate,graduationcontroller.addgraduation);

router.get('/getgraduation/:userid?',graduationcontroller.getdetail);

module.exports = router;