/***
 * 索引数组
 ***/
db.posts.drop();
db.posts.insert({
    "content":"...",
    "comments":[
        {
            "comment":"good post",
            "author":"John",
            "votes":0
        },
        {
            "comment":"i thought it was too short",
            "author":"Claire",
            "votes":3
        },
        {
            "comment":"free watches",
            "author":"Alice",
            "votes":0
        }
    ]
});

db.posts.find();

// 在数组的元素上建立索引
db.posts.ensureIndex({"comments.votes":1});

// 对数组的指定位置元素做索引
db.posts.ensureIndex({"comments.10.votes":1});

/***
 * 不能创建多数组的元素索引
 ***/
db.multi.drop();
db.multi.find();

db.multi.ensureIndex({x:1,y:1});

// 可以插入
db.multi.insert({x:[1,2,3],y:1});

// 可以插入
db.multi.insert({x:1,y:[1,2,3]});

// 不可用插入
// ——》 会导致创建笛卡尔积索引
db.multi.insert({x:[1,2,3],y:[1,2,3]});