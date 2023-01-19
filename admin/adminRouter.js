var express = require('express');
var router = express.Router();
var admincontroller = require('./adminController');

//user detail
router.get('/user_details',admincontroller.userdetails)

//ssc details
router.get('/ssc_detail',admincontroller.sscdetails);

//hsc detail
router.get('/hsc_detail',admincontroller.hscdetails);

//graduation
router.get('/graduation_detail',admincontroller.graduation_detail);

//post graduation detail
router.get('/post_graduation',admincontroller.post_graduation);

//skills
router.get('/skiils_detail',admincontroller.skiildetail);

//contact us
router.get('/contact_detail',admincontroller.contactdetail);

module.exports = router;