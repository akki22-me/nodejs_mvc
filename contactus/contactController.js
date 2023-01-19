var router = require('./contactRouter');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);
var contactmodel = require('./contactModel'); 

exports.addcontactdetail = async(req,res)=>{
    try {

        var contact_location = req.body.contact_location;
        var contact_email = req.body.contact_email;
        var contact_phone = req.body.contact_phone;
        var facebook = req.body.facebook;
        var linklin = req.body.linklin;
        var twitter = req.body.twitter;
        var github = req.body.github;
        var user_id = req.body.user_id;
        if(!user_id){
            return res.json({
            message:'User Id Missing',
            status:false
            });
        }

        const form = {
            contact_location,
            contact_email,
            contact_phone,
            facebook,
            linklin,
            twitter,
            github,
            user_id
        }

        var exit = await contactmodel.getdeatail(user_id);
        var check = await query(exit);
        if(check.length > 0){
         var row =await contactmodel.updatedetail(form);
         var result = await query(row)
         if(result){
            res.status(200).json({
             message:'Contact detail is update',
             status:true,
             data:result
            });
         }
         else{
            res.json({
            message:'Contact detail not update',
            status:false
            });
         }
        }else{
            var row =await contactmodel.adddetail(form);
            var result = await query(row)
            if(result){
               res.status(200).json({
                message:'Contact detail is Add',
                status:true,
                data:result
               });
            }
            else{
               res.json({
               message:'Contact detail not Add',
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
              message:'User is missing',
              status:false
            });
        }
        

        var row = await contactmodel.getdeatail(userid);
        var result = await query(row);
        if(result.length > 0){
          res.status(200).json({
          message:'Contact Detail Is',
          status:true,
          data:result[0]
          });
        }else{
           res.json({
            message:'Contact Detail Not Found',
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