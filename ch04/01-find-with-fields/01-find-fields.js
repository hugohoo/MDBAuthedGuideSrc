/***
 * 查找指定字段
 ***/
// 查询指定的字段
db.users.find({},{username:1,email:1});

// 排除指定的字段
db.users.find({},{username:1,email:1,"_id":0});