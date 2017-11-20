/***
 * 复合索引简介
 ***/
// 无复合索引的多字段排序查询
db.users.find().sort({age:1,username:1}).explain();

// 建立复合索引
db.users.ensureIndex({age:1,username:1});

// 建立复合索引的多字段排序查询
db.users.find().sort({age:1,username:1}).explain();

// 执行不排序的查询
db.users.find({},{_id:0,i:0,created:0});

// 执行排序的查询
db.users.find({},{_id:0,i:0,created:0}).sort({age:1,username:1});

// 点查询
db.users.find({age:21},{_id:0,i:0,created:0}).sort({username:-1});

// 多值查询
db.users.find({age:{
    "$gte":21,
    "$lte":30
}},{_id:0,i:0,created:0});

// 多值排序查询
db.users.find({age:{
    "$gte":21,
    "$lte":30
}},{_id:0,i:0,created:0}).sort({username:1});

// 多值排序查询默认索引
db.users.find({age:{
    "$gte":21,
    "$lte":30
}},{_id:0,i:0,created:0}).sort({username:1}).explain();

// 强制使用指定索引
db.users.find({age:{
    "$gte":21,
    "$lte":30
}},{_id:0,i:0,created:0}).sort({username:1}).hint({age:1,username:1}).explain();

// 以排序字段和查询字段建立最优索引
db.users.ensureIndex({username:1,age:1});

// 强制使用指定排序查询索引
db.users.find({age:{
    "$gte":21,
    "$lte":30
}},{_id:0,i:0,created:0}).sort({username:1}).hint({username:1,age:1}).explain();