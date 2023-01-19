
async function exitrecord(userid){
    var sql ="select * from post_graduation_details where userid='"+userid+"'";
    return sql;
}


async function adddetail(form){
var sql = "Insert into post_graduation_details(pg_collage,pg_start,pg_end,pg_percentage,pg_location,userid) values('"+form.pg_collage+"','"+form.pg_start+"','"+form.pg_end+"','"+form.pg_percentage+"','"+form.pg_location+"','"+form.userid+"')";
return sql;
}

async function updatedetail(form){
var sql ="update post_graduation_details set pg_collage='"+form.pg_collage+"',pg_start='"+form.pg_start+"',pg_end='"+form.pg_end+"',pg_percentage='"+form.pg_percentage+"',pg_location='"+form.pg_location+"' where userid='"+form.userid+"'";
return sql;
}

module.exports =  {
    exitrecord,
    adddetail,
    updatedetail
}