/***
 * null 值查询
 ***/
db.c.drop();
db.c.insert([
    {y:null},
    {y:1},
    {y:2},
]);
db.c.find();

// 查询键值为 null 的文档
db.c.find({y:null});

// 不存在的键会被匹配为 null
db.c.find({z:null});

// 匹配键存在，且键值为 null 的文档
db.c.find({"y":{"$exists":true,"$in":[null]}});