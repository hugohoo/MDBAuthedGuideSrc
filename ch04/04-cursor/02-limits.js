/***
 * 限制结果查询
 ***/
// 限制结果的数量
db.coll.find().limit(10);

// 跳过一定的结果
db.coll.find().skip(10).limit(10);

// 按指定的字段排序
db.coll.find().limit(10).sort({x:-1});