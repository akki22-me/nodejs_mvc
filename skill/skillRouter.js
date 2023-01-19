var express = require('express');
var router = express.Router();
var skillcontroller = require('./skillController');

router.post('/add_skills',skillcontroller.addsskills);

router.get('/get_skills/:userid?',skillcontroller.getdetail)

module.exports = router;