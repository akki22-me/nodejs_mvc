var usercontroller = require('./usercontroller');

var util = require('util');
var con = require('../dbcon');
var query = util.promisify(con.query).bind(con);



//add user db
async function adduserdb(adddataform){
    var sql = "insert into users_accounts(user_email,user_name,user_password) values('"+adddataform.user_email+"','"+adddataform.user_name+"','"+adddataform.hash+"')";
    return sql;
}

async function exitemail(user_email){
    const sql1 = "SELECT * FROM users_accounts where user_email='" + user_email + "'";
    return sql1;

}

async function checklogin(email){
    const sql1 = "SELECT * FROM users_accounts where user_email='" + email + "'";
    return sql1;
}

async function usedetail(userid){
    const sql1 = "SELECT * FROM users_accounts where user_id='" + userid + "'";
    return sql1;
}

async function profileadd(form){
var sql = "update users_accounts set user_profile='"+form.inserpath+"' where user_id='"+form.userid+"'";
return sql;
}

module.exports ={
    adduserdb,
    exitemail,
    checklogin,
    usedetail,
    profileadd
}

