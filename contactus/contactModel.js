
async function getdeatail(user_id){
    var sql ="select * from contact_us where user_id='"+user_id+"'";
    return sql;
}

async function adddetail(form){
    var sql ="insert into contact_us (contact_location,contact_email,contact_phone,facebook,linklin,twitter,github,user_id) values('"+form.contact_location+"','"+form.contact_email+"','"+form.contact_phone+"','"+form.facebook+"','"+form.linklin+"','"+form.twitter+"','"+form.github+"','"+form.user_id+"')";
    return sql;
}


async function updatedetail(form){
var sql ="update contact_us set  contact_location='"+form.contact_location+"',contact_email='"+form.contact_email+"',contact_phone='"+form.contact_phone+"',facebook='"+form.facebook+"',linklin='"+form.linklin+"',twitter='"+form.twitter+"',github='"+form.github+"' where user_id='"+form.user_id+"'";
return sql;
}

module.exports={
    getdeatail,
    adddetail,
    updatedetail
}