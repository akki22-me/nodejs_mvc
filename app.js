var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
var cors = require('cors')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

 var userRouter = require('./users/userrouter');
 var sscRouter = require('./ssc/sscrouter');
 var hscRouter = require('./hsc/hscRouter');
 var geaduationRouter = require('./graduation/graduationRouter');
 var postRouter = require('./Postdetail/PostgrRouter');
 var skillRouter = require('./skill/skillRouter');
 var contactRouter = require('./contactus/contactRouter');

 var adminRouter = require('./admin/adminRouter');

var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload());


app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/users',userRouter);
app.use('/ssc',sscRouter);
app.use('/hsc',hscRouter);
app.use('/geaduation',geaduationRouter);
app.use('/postdetail',postRouter);
app.use('/skill',skillRouter);
app.use('/contact',contactRouter);
app.use('/admin',adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
