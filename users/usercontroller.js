var router = require('./userrouter');
var usermodel = require('./usermodel');
var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');



exports.add_user_account = async(req,res)=>{
    var user_email = req.body.user_email;
    var user_name = req.body.user_name;
    var user_password = req.body.user_password;

    var checkemail = await usermodel.exitemail(user_email)
    const rowss = await query(checkemail);
    if (rowss.length > 0) {
      return  res.json({
            message: 'Email Is Used ',
            status: false
        });
    }
    const hash =  bcrypt.hashSync(user_password, saltRounds);
    const adddataform={
        user_email,
        user_name,
        hash
    }
    var row = await usermodel.adduserdb(adddataform);
    var result = await query(row);
    if(result){
      return res.json({
      message:'User Is Add',
      status:true,
      data:result
      });
    }else{
        res.json({
         message:'User Is Not Add',
         status:false
        });
    }

}

exports.user_login = async(req,res)=>{
    var email = req.body.user_email;
    var password = req.body.user_password;


    var row = await usermodel.checklogin(email);
    var emailresult = await query(row);

    if(emailresult.length > 0){
        var dbpass= emailresult[0].user_password;
        var dbid = emailresult[0].user_id
        const loginuser = await bcrypt.compare(password, dbpass);
          if(loginuser){
            const token= jwt.sign(
                {
                    userid:dbid
                },'secret', {expiresIn:'1h'}
                );
                // jwt.sign({
                //     data: 'foobar'
                //   }, 'secret', { expiresIn: 60 * 60 });
                   
            res.status(200).json({
                message:'User Is Login',
                dbid:dbid,
                token:token,
                status:true
            }); 
          }else{
            res.json({
                message:'Email and password not match',
                status:false
              }); 
          }

    }else{
        res.json({
            message:'Email and password not match',
            status:false
          });
    }

}

exports.userdetail = async(req,res)=>{
    try {
        
  const userid = req.params.userid;
  
  if(!userid){
    return res.json({
     message:'Userid is missing',
     status:false
    });
  }

  var row =await usermodel.usedetail(userid);
  var result = await query(row);
   if(result.length > 0){
      res.status(200).json({
      message:'User detail is',
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
    console.log(error);
    res.json({
    message:'Error'
    });
    }
}


exports.add_user_profile = async(req,res)=>{
  try {
    var userid = req.body.userid;
    // var profile = req.file.profile;

    if(!userid){
      return res.json({
      message:'User Is Missing',
      status:false
      });
    }
    

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.json({
     message:'Profile Is Required',
     status:false
      });
    }
  
    let sampleFile;
    let uploadPath;
  

    sampleFile = req.files.sampleFile;
    uploadPath = 'public/images/' + sampleFile.name;
    inserpath='/images/' + sampleFile.name;
   await sampleFile.mv(uploadPath);

   const form = {
    inserpath,
    userid
   }

   var row = await usermodel.profileadd(form);
   var result = await query(row);
   if(result){
    res.status(200).json({
    message:"Profile Image Is Add",
    status:true,
    data:result
    });
   }
   else{
  res.json({
   message:'Profile Image Is Not Add',
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