
var router = require('./skillRouter');
var skillmodel = require('./skillmodel');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);

exports.addsskills = async(req,res)=>{
    try {
        
        var skill_details = req.body.skill_details;
        var userid = req.body.userid;

        console.log(skill_details,'skill_details')

        if(!skill_details){
            return res.json({
            message:'Enter Skill Detail',
            status:false
            });
        }
     

        var skill1=JSON.parse(skill_details)
        // console.log(skill1,'skill')
        // var mytype = typeof(skill1)
        // console.log(mytype,'mytype')
        if(skill1.length===0){
            return res.json({
                message:'Enter Skill Detail',
                status:false
                });
        }

        if(!userid){
            return res.json({
            message:'User is missing',
            status:false
            });
        }

        var form={
            skill_details,
            userid
        }

        var exitrow = await skillmodel.exitskill(userid);
        var check = await query(exitrow);
        if(check.length > 0){
        var row = await skillmodel.updateskill(form);
        var result = await query(row);
        if(result){
            res.status(200).json({
            message:'Skill Is Update',
            status:false,
            data:result
            });
        }
        else{
           res.json({
            message:'Skill Is Not Update',
            status:false
           });
        }
        }
        else{
            var row = await skillmodel.addskill(form);
            var result = await query(row);
            if(result){
                res.status(200).json({
                message:'Skill Is Add',
                status:false,
                data:result
                });
            }
            else{
               res.json({
                message:'Skill Is Not Add',
                status:false
               });
            }
        }


    } catch (error) {
        console.log(error);
        res.json({
        message:'Error'
        });
    }

}

exports.getdetail = async(req,res)=>{
    try {
        var userid = req.params.userid;
        if(!userid){
            return res.json({
            message:'User Is Missing',
            status:false
            });
        }

        var row = await skillmodel.exitskill(userid);
        var result = await query(row);
        if(result.length > 0){
            res.status(200).json({
             message:'User Skill Detail',
             status:true,
             data:result[0]
            });
        }
        else{
              res.json({
               message:'User Detail',
               status:false
              });
        }
        
    } catch (error) {
       console.log(error,'error');
       res.json({
        message:'Error'
       });  
    }
}