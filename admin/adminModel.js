async function userdetail(){
    var sql = "select * from users_accounts";
    return sql;
}

async function sscdetail(){
    var sql ="select users_accounts.user_id,users_accounts.user_email,users_accounts.user_name,users_accounts.user_profile,ssc_details.ssc_id,ssc_details.ssc_school_name,ssc_details.ssc_start,ssc_details.ssc_end,ssc_details.ssc_percentage,ssc_details.ssc_location,ssc_details.create_at from users_accounts inner join ssc_details on users_accounts.user_id = ssc_details.userid order by ssc_id desc";
    return sql;
}

async function hscdetail(){
   var sql = "select users_accounts.user_id,users_accounts.user_email,users_accounts.user_name,users_accounts.user_profile,hsc_details.hsc_id,hsc_details.userid,hsc_details.hsc_school_name,hsc_details.hsc_start,hsc_details.hsc_end,hsc_details.hsc_percentage,hsc_details.hsc_location  from users_accounts inner join  hsc_details on users_accounts.user_id=hsc_details.userid order by hsc_id desc";
   return sql;
}

async function graduationdetail(){
    var sql ="select users_accounts.user_id,users_accounts.user_email,users_accounts.user_name,users_accounts.user_profile,gratuation_details.gr_id,gratuation_details.userid,gratuation_details.gr_start,gratuation_details.gr_end,gratuation_details.ge_percentage,gratuation_details.gr_collage_name,gratuation_details.gr_location from users_accounts inner join gratuation_details on users_accounts.user_id=gratuation_details.userid order by gr_id"
  return sql;
}

async function postgraduation(){
   var sql ="select users_accounts.user_id,users_accounts.user_email,users_accounts.user_name,users_accounts.user_profile,post_graduation_details.pg_id,post_graduation_details.userid,post_graduation_details.pg_start,post_graduation_details.pg_end,post_graduation_details.pg_collage,post_graduation_details.pg_percentage,post_graduation_details.pg_location from  users_accounts inner join post_graduation_details on users_accounts.user_id=post_graduation_details.userid order by pg_id desc "
  return sql;
}

async function skiildetail(){
   var sql ="select users_accounts.user_id,users_accounts.user_email,users_accounts.user_name,users_accounts.user_profile,user_slills.skiil_id,user_slills.userid,user_slills.skill_details,user_slills.created_at from users_accounts inner join user_slills on users_accounts.user_id= user_slills.userid order by skiil_id desc ";
   return sql;

}

async function contactdetails(){
 var sql ="select users_accounts.user_id,users_accounts.user_email,users_accounts.user_name,users_accounts.user_profile,contact_us.contact_id,contact_us.user_id,contact_us.contact_location,contact_us.contact_email,contact_us.contact_phone,contact_us.facebook,contact_us.linklin,contact_us.twitter,contact_us.github from users_accounts inner join contact_us on users_accounts.user_id=contact_us.user_id order by contact_id desc";
return sql;
}


module.exports = {
    userdetail,
    sscdetail,
    hscdetail,
    graduationdetail,
    postgraduation,
    skiildetail,
    contactdetails
}