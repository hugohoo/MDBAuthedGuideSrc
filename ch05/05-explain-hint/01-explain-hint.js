/***
 * explain 查询计划 hint 强制使用某索引
 ***/
// 查看查询计划
db.users.find({age:42}).explain();

// 查看优化器的索引选择
// ——》 会优先使用精确匹配的键的索引
db.users.find({age:{"$gt":10},username:"sally"}).explain();

// 强制使用指定索引
db.users.find({age:{"$gt":10},username:"sally"}).hint({age:1,username:1}).explain();