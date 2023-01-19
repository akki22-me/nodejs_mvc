var express = require('express');
var router = express.Router();
var contactcontroller = require('./contactController');
var validate = require('./contactHelper');
var contactvalidate = validate.contactform;

router.post('/add_contact_detail',contactvalidate,contactcontroller.addcontactdetail);

router.get('/user_contact_detail_get/:userid?',contactcontroller.getdetail);

module.exports = router;