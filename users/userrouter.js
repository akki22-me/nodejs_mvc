var express = require('express');
var usercontroller = require('./usercontroller');
var userhelper = require('./usershelper');
 var auth = require('../auth');
const { param } = require('../routes');
var router = express.Router();

var uservalidate = userhelper.validateUser;
var loginuservalidate = userhelper.loginuser;


//create user
router.post('/add_user_account',uservalidate,usercontroller.add_user_account)

//user login 
router.post('/user_login',loginuservalidate,usercontroller.user_login)

//user detail get
 router.get('/user_detail/:userid?',auth,usercontroller.userdetail);

 //user profile
 router.post('/add_user_profile',usercontroller.add_user_profile);

module.exports = router