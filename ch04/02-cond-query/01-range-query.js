/***
 * 范围查询
 ***/
db.users.find({age:{"$gte":15,"$lte":21}});

// 不等查询
db.users.find({name:{"$ne":"joe"}});