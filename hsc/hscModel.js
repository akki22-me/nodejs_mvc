
async function checkexit(userid){
    var sql = "select * from hsc_details where userid='"+userid+"'";
    return sql;
}

async function adddetail(form){
var sql ="insert into hsc_details(hsc_school_name,hsc_start,hsc_end,hsc_percentage,hsc_location,userid) values('"+form.hsc_school_name+"','"+form.hsc_start+"','"+form.hsc_end+"','"+form.hsc_percentage+"','"+form.hsc_location+"','"+form.userid+"')";
return sql;
}

async function detailupdate(form){
var sql = "update hsc_details set  hsc_school_name='"+form.hsc_school_name+"',hsc_start='"+form.hsc_start+"',hsc_end='"+form.hsc_end+"',hsc_percentage='"+form.hsc_percentage+"',hsc_location='"+form.hsc_location+"' where userid='"+form.userid+"'";
return sql;
}

async function detailget(userid){
    var sql ="select * from hsc_details where userid='"+userid+"'";
    return sql;
}

module.exports = {
    checkexit,
    adddetail,
    detailupdate,
    detailget
}