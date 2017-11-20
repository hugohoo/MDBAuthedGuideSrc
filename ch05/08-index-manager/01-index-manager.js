/***
 * 索引管理
 ***/
// 查看集合的索引
db.users.getIndexes();

/***
 * 自定义索引标识
 ***/
db.users.ensureIndex({_id:-1,username:1},{name:"kk"});

/***
 * 删除索引
 ***/
db.users.dropIndex("kk");