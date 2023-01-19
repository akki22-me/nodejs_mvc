var router = require('./adminRouter');
var adminmodel = require('./adminModel');
var con = require('../dbcon');
var util = require('util');
var query = util.promisify(con.query).bind(con);


exports.userdetails = async(req,res)=>{
    try {
        var row = await adminmodel.userdetail();
        var result = await query(row);
        if(result.length > 0){
            res.status(200).json({
              message:'User Detail IS',
              status:true,
              data:result
            });
        }else{
            res.json({
             message:'User Detail Not Found',
             status:false
            });
        }
        
    } catch (error) {
        console.log(error)
    }
}

//sscdetails
exports.sscdetails = async(req,res)=>{
    try {
        
    var row = await adminmodel.sscdetail();
    var result = await query(row);
    if(result.length > 0){
      res.status(200).json({
        message:'SSC detail IS',
        status:true,
        data:result
      });
    }
    else{
        res.json({
        message:'SSC detail Not Found',
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

//hscdetails
exports.hscdetails = async(req,res)=>{
    try {

        var row = await adminmodel.hscdetail();
        var result = await query(row);
        if(result.length > 0){
           res.status(200).json({
           message:'HSC Detail',
           status:true,
           data:result
           });
        }
        else{
          res.json({
           message:'HSC Detail Not Found',
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

//graduation_detail
exports.graduation_detail = async(req,res)=>{
    try {

        var row = await adminmodel.graduationdetail();
        var result = await query(row);
        if(result.length > 0){
           res.status(200).json({
            message:'Graduation Detail IS',
            status:true,
            data:result
           });
        }
        else{
               res.json({
               message:'Graduation Detail Not Found',
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

exports.post_graduation = async(req,res)=>{
try {


    var row = await adminmodel.postgraduation();
    var result = await query(row);
    if(result.length > 0){
        res.status(200).json({
         message:'Post Graduation Detail',
         status:true,
         data:result
        });
    }
    else{
          res.json({
           message:'Post Graduation Detail Not Found',
           status:false
          });
    }
    
} catch (error) {
    console.log(error);
    res.json({
     message:'Error'
    });
}
};


exports.skiildetail = async(req,res)=>{
    try {

        var row = await adminmodel.skiildetail();
        var result = await query(row);
        if(result.length > 0){
            res.status(200).json({
            message:'Skiil Detail Is',
            status:true,
            data:result
            });
        }
        else{
               res.json({
               message:'Skill Detail Not Found',
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


exports.contactdetail = async(req,res)=>{
    try {

        var sql = await adminmodel.contactdetails();
        var result = await query(sql);
        if(result.length > 0){
          res.status(200).json({
           message:'Contact Detail Is',
           status:true,
           data:result
          });
        }
        else{
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