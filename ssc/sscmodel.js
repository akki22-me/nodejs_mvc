 

 async function checkexit(userid){
    var sql="select * from ssc_details where userid='"+userid+"'"
    return sql;
 } 

 async function addsscdetail(postdata){
var sql = "Insert into ssc_details(ssc_school_name,ssc_start,ssc_end,ssc_percentage,ssc_location,userid) values('"+postdata.school_name+"','"+postdata.ssc_start+"','"+postdata.ssc_end+"','"+postdata.ssc_percentage+"','"+postdata.ssc_location+"','"+postdata.userid+"')";
return sql
 }

 async function upsscdetail(updata){
var sql ="update ssc_details set ssc_school_name='"+updata.school_name+"',ssc_start='"+updata.ssc_start+"',ssc_end='"+updata.ssc_end+"',ssc_percentage='"+updata.ssc_percentage+"',ssc_location='"+updata.ssc_location+"' where userid='"+updata.userid+"'";
return sql;
 }


 async function gesscdetail(userid){
   var sql = "select * from ssc_details where userid='"+userid+"'";
   return sql;
 }


 module.exports={
   checkexit,
   addsscdetail,
   upsscdetail,
   gesscdetail
 }