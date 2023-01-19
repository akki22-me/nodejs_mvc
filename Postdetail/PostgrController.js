var router = require('./PostgrRouter');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);
var postmodel = require('./PostgrModel');


exports.adddetail = async(req,res)=>{
    try {

        var pg_collage = req.body.pg_collage;
        var pg_start = req.body.pg_start;
        var pg_end = req.body.pg_end;
        var pg_percentage = req.body.pg_percentage;
        var pg_location = req.body.pg_location;
        var userid = req.body.userid;

        if(!userid){
            return res.json({
            message:'User id missing',
            status:false
            });
        }

        const form ={
            pg_collage,
            pg_start,
            pg_end,
            pg_percentage,
            pg_location,
            userid
        }

        var exit = await postmodel.exitrecord(userid);
        var check = await query(exit);

        if(check.length > 0){
       var row= await postmodel.updatedetail(form);
       var result = await query(row);
       if(result){
         res.status(200).json({
         message:'Post Graduation Detail Update',
         status:true,
         data:result
         });
       }
       else{
         res.json({
         message:'Post Graduation Detail Not Update',
         status:false
         });
       }
        }
        else{
            var row= await postmodel.adddetail(form);
            var result = await query(row);
            if(result){
              res.status(200).json({
              message:'Post Graduation Detail add',
              status:true,
              data:result
              });
            }
            else{
              res.json({
              message:'Post Graduation Detail Not add',
              status:false
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
            message:'user id missing',
            status:false
            });
        }

        var row = await postmodel.exitrecord(userid);
        var result = await query(row);
        if(result.length > 0){
            res.status(200).json({
               message:'user Post graduation detail',
               status:true,
               data:result[0]
            });
        }else{
            res.json({
            message:'User Post Detail Not Found',
            status:false
            });
        }
        
    } catch (error) {
        console.log(error);
        res.json({
         message:'Error'
        });
    }
}