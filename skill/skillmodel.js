
async function exitskill(userid){
    var sql ="select * from user_slills where userid='"+userid+"'";
    return sql;
}


async function addskill(form){
    var sql = "insert into user_slills(userid,skill_details) values('"+form.userid+"','"+form.skill_details+"')";
    return sql;
}

async function updateskill(form){
    var sql ="update user_slills set skill_details='"+form.skill_details+"' where userid='"+form.userid+"'";
    return sql;
}

module.exports ={
    exitskill,
    addskill,
    updateskill
}