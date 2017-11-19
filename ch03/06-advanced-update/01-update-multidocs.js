/***
 * 更新多个文档
 ***/
// 给所有用户发送礼物
db.users.update({},{
    "$set":{
        "gift":"Happy Birthday"
    }
},false,true);

// 查看影响的文档数
db.runCommand({getLastError:1});