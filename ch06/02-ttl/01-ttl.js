/***
 * 限时索引 TTL
 ***/
db.foo.drop();
db.foo.insert({lastUpdated:new Date()});
db.foo.find();

// 创建时限为一个小时后的限时索引
db.foo.ensureIndex({lastUpdated:1},{expireAfterSecs:60*60*1});

db.foo.getIndexes();

// 修改限时索引的时限
db.runCommand({"collMod":"kk.foo",expireAfterSecs:60*60*24});

