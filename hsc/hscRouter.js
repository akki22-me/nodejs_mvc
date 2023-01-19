var express = require('express');
var router = express.Router();
var hsccontroller = require('./hscController');
var hschelper = require('./hscHelper');

var validate = hschelper.hscform;

router.post('/addhsc',validate,hsccontroller.addhscdetail);

router.get('/hsc_detail_get/:userid?',hsccontroller.hsc_detail_get);

module.exports = router;