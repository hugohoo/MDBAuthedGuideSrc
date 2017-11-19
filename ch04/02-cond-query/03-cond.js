/***
 * 条件语义
 ***/
// 同一键可以应用多个条件
db.users.find({"age":{"$gt":15,"$lt":25}});

// 元操作符应该位于外层文档
db.users.find({"$or":[{"age":18},{"age":27}]});