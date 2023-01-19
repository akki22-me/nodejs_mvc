var express = require('express');
var router = express.Router();
var postcontroller= require('./PostgrController');
var validate = require('./Postgrhelper');
var formvalidate = validate.graduationform;


router.post('/add_post_graduation',formvalidate,postcontroller.adddetail);

router.get('/get_detailpostdetail/:userid?',postcontroller.getdetail)

module.exports = router;