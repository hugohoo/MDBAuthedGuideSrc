/***
 * 修改数组指定位置范围内的元素
 ***/

/***
 * 通过下标修改指定位置的元素
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

// 修改第一个平路的投票数量
db.posts.update({},{
    "$inc":{
        "comments.0.votes":1
    }
});

/***
 * $  用来定位匹配条件的位置
 ***/
db.posts.update({"comments.author":"John"},{
    "$set":{
        "comments.$.author":"Jim"
    }
});