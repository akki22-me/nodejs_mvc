
async function exitcheck(userid){
var sql = "select * from gratuation_details where userid='"+userid+"'";
return sql;
}

async function adddetail(form){
var sql = "insert into gratuation_details(gr_collage_name,gr_start,gr_end,ge_percentage,gr_location,userid) values('"+form.gr_collage_name+"','"+form.gr_start+"','"+form.gr_end+"','"+form.ge_percentage+"','"+form.gr_location+"','"+form.userid+"') ";
return sql;
}

async function updatedetail(form){
    var sql ="update gratuation_details set gr_collage_name='"+form.gr_collage_name+"',gr_start='"+form.gr_start+"',gr_end='"+form.gr_end+"',ge_percentage='"+form.ge_percentage+"',gr_location='"+form.gr_location+"' where userid='"+form.userid+"'";
    return sql;
}



module.exports={
    exitcheck,
    adddetail,
    updatedetail
}