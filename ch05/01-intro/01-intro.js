/***
 * 索引入门
 ***/
db.users.drop();
for (var i=0;i<10000;i++){
    db.users.insert(
        {
            i:i,
            username:"user"+i,
            age:Math.floor(Math.random()*120),
            created:new Date()
        });
}
db.users.find();

// 无索引查询
db.users.find({username:"user500"}).explain();

// 限制数量提高查询效率
db.users.find({username:"user500"}).limit(1).explain();

// 建立查询字段的索引
db.users.ensureIndex({username:1});

// 建立索引后查询
db.users.find({username:"user500"}).explain();