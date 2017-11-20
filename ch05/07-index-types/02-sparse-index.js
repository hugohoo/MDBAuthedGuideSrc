/***
 * 稀疏索引
 ***/
db.foo.drop();
db.foo.insert([
    {},
    {x:1},
    {x:2},
    {x:3},
]);
db.foo.find();

// 以 x 字段创建唯一稀疏索引
db.foo.ensureIndex({x:1},{unique:true,sparse:true});

// 查询 x!=2 的文档
db.foo.find({x:{"$ne":2}});