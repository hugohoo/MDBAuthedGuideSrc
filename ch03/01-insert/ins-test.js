/***
 *插入测试
 ***/
/***
 * 简单插入
 ***/
db.foo.insert({"bar":"baz"});

db.foo.findOne();

/***
 * 批量插入
 ***/
db.foo.insert([
    {"_id":0},
    {"_id":1},
    {"_id":2}
]);

db.foo.find();

// 插入错误时候，前面会插入成功，后面会全部不插入
db.foo.insert([
    {"_id":6},
    {"_id":7},
    {"_id":2},
    {"_id":8}
]);

db.foo.find();


