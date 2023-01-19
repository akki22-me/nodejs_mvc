var router = require('./sscrouter');
var sscmodel = require('./sscmodel');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);


exports.addsscdetail = async(req,res)=>{

    try {

        var school_name = req.body.school_name;
        var ssc_start = req.body.ssc_start;
        var ssc_end = req.body.ssc_end;
        var ssc_percentage = req.body.ssc_percentage;
        var ssc_location = req.body.ssc_location;
        var userid = req.body.userid;

        if(!userid){
            return res.json({
              message:'User is miising',
              status:false
            });
        }

        const postdata = {
            school_name,
            ssc_start,
            ssc_end,
            ssc_percentage,
            ssc_location,
            userid
        }

        const updata={
            school_name,
            ssc_start,
            ssc_end,
            ssc_percentage,
            ssc_location,
            userid
        }

        var checkexit = await sscmodel.checkexit(userid);
        var rowexit = await query(checkexit);
        if(rowexit.length > 0){
         var uprow = await sscmodel.upsscdetail(updata);
         var upresult = await query(uprow);
         if(upresult){
           res.status(200).json({
             message:'SSC detail is update',
             status:true,
             data:upresult
           });
         }
         else{
              res.json({
              message:'SSC detail is not update'
              });
         }
        }
        else{
            var addrow = await sscmodel.addsscdetail(postdata);
            var addresult = await query(addrow);
            if(addresult){
                res.status(200).json({
                  message:'SSC detail is add',
                  status:true,
                  data:addresult
                });
            }
            else{
                res.json({
                message:'SSC detail not add',
                status:false
                });
            }
        }
        
    } catch (error) {
        console.log(error,'error');
        res.json({
        Message:'error'
        });
    }
}


exports.get_user_sscdetail = async(req,res)=>{
    try {

        var userid = req.params.userid;
        if(!userid){
            return res.json({
            message:'User is missing',
            status:false
            });
        }

        var row = await sscmodel.gesscdetail(userid);
        var result = await query(row);

        if(result.length > 0){
         res.status(200).json({
            message:'User Detail Is',
            status:true,
            data:result[0]
         });
        }
        else{
           res.json({
             message:'User Detail Not Found',
             status:false
           });
        }
        
    } catch (error) {
        console.log(error)
        res.json({
          message:'error'
        });
    }
}