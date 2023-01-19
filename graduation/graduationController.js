var router = require('./graduationRouter');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);
var grmodel = require('./graduationModel');

exports.addgraduation = async(req,res)=>{
    try {

var gr_collage_name = req.body.gr_collage_name;
var gr_start = req.body.gr_start;
var gr_end = req.body.gr_end;
var ge_percentage = req.body.ge_percentage;
var gr_location = req.body.gr_location;
var userid = req.body.userid;

if(!userid){
    return res.json({
    message:'Userid is missing',
    status:false
    });
}
const form = {
    gr_collage_name,
    gr_start,
    gr_end,
    ge_percentage,
    gr_location,
    userid
}

var checkexit = await grmodel.exitcheck(userid);
var check = await query(checkexit);
if(check.length > 0){

    var row = await grmodel.updatedetail(form);
    var result = await query(row);
    if(result){
     res.status(200).json({
      message:'Graduation Detail Is Update',
      status:true,
      data:result
     });
    }
    else{
      res.json({
       message:'Graduation Detail Is Not update'
      });
    }
}
else{
    var row = await grmodel.adddetail(form);
    var result = await query(row);
    if(result){
        res.status(200).json({
         message:'Graduation Detail Is Add',
         status:true,
         data:result
        });
       }
       else{
         res.json({
          message:'Graduation Detail Is Not Add'
         });
       }
}


    } catch (error) {
        console.log(error);
        res.json({
        message:'error'
        });
    }
}



exports.getdetail = async(req,res)=>{
    try {
        
        var userid = req.params.userid;
        if(!userid){
            return res.json({
            message:'User id missing',
            status:false
            });
        }

        var row = await grmodel.exitcheck(userid);
        var result = await query(row);
        if(result.length > 0){
          res.status(200).json({
          message:'User Graduation Detail',
          status:true,
          data:result[0]
          });
        }else{
          res.json({
          message:'User Graduation Detail Not Found',
          status:false
          });
        }

    } catch (error) {
        console.log(error);
        res.json({
         message:'error'
        });
    }
}