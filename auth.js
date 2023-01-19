var jwt = require('jsonwebtoken');


// invalid token - synchronous

module.exports=(req,res,next)=>
{

    var token = req.headers.authorization;

try {
    var decoded = jwt.verify(token, 'secret');
    next();
  } catch(err) {
    // err
    res.status(404).json({
        message:'Token is Not Correct',
        status:false
    })
  }

}