/***
 *数组元素增加修改器 $push
 ***/

db.posts.update({"title":"A Blog Post"},{
    "$push":{
        "comments":{
            "name":"joe",
            "email":"joe@example.com",
            "content":"nice post."
        }
    }
});

// 再增加一条评论
db.posts.update({"title":"A Blog Post"},{
    "$push":{
        "comments":{
            "name":"bob",
            "email":"bob@example.com",
            "content":"good post."
        }
    }
});