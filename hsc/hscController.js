var router =require('./hscRouter');
var hscmodel = require('./hscModel');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con)


exports.addhscdetail = async(req,res)=>{
    try {
        
        var hsc_school_name = req.body.hsc_school_name;
        var hsc_start = req.body.hsc_start;
        var hsc_end = req.body.hsc_end;
        var hsc_percentage = req.body.hsc_percentage;
        var hsc_location = req.body.hsc_location;
        var userid = req.body.userid;

        if(!userid){
            return res.json({
            message:'Enter userid',
            status:false
            });
        }


        var form ={
            hsc_school_name,
            hsc_start,
            hsc_end,
            hsc_percentage,
            hsc_location,
            userid
        }

        var rowexit = await hscmodel.checkexit(userid);
        var detail = await query(rowexit);
        if(detail.length > 0){
          var upsql = await hscmodel.detailupdate(form);
          var result = await query(upsql);
          if(result){
            res.status(200).json({
            message:'HSC detail is update',
            status:true,
            data:result
            });
         }else{
           res.json({
           message:'HSC deail not update',
           status:false
           });
         }
        }
        else{
            var addsql = await hscmodel.adddetail(form);
            var result = await query(addsql);
            if(result){
               res.status(200).json({
               message:'HSC detail is add',
               status:true,
               data:result
               });
            }else{
              res.json({
              message:'HSC deail not add',
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

exports.hsc_detail_get = async(req,res)=>{
    try {
        var userid = req.params.userid;
        if(!userid){
            return res.json({
            message:'user id missing',
            status:false
            });
        }

        var row = await hscmodel.detailget(userid);
        var result = await query(row);
        if(result.length > 0){
       res.status(200).json({
       message:'HSC detail is',
       status:true,
       data:result[0]
       });
        }
        else{
            res.json({
            message:'HSC Detail Not get',
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