/***
 * 唯一索引
 ***/
db.users.drop();
for (var i=0;i<1000;i++){
    db.users.insert(
        {
            i:i,
            username:"user"+i,
            age:Math.floor(Math.random()*120),
            created:new Date()
        });
}
db.users.find();

// 创建唯一索引
db.users.ensureIndex({username:1},{unique:true});

// 可以插入
db.users.insert({username:"bob"});

// 不可以插入，唯一索引约束
db.users.insert({username:"bob"});
