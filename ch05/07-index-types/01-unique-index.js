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


/***
 * 复合唯一索引
 ***/
db.users.ensureIndex({age:1,username:1},{unique:true});

//可以单键相同
db.users.insert({age:10900});
db.users.insert({username:"bob100"});

db.users.insert({age:10900,username:"bob101"});
db.users.insert({age:10900,username:"bob100"});

// 不能都相同
db.users.insert({age:10900,username:"bob100"});


/***
 * 去除重复
 ***/
db.users.ensureIndex({age:1},{unique:true,dropDups:true});