var express = require('express');
var router = express.Router();
var ssccontroller = require('./ssccontroller');
var sscvalidate = require('./sschelper');
var valform=sscvalidate.sscform

// add ssc detail and update
router.post('/add_ssc_detail',valform,ssccontroller.addsscdetail)

//get ssc detail
router.get('/get_user_sscdetail/:userid?',ssccontroller.get_user_sscdetail)


module.exports = router;