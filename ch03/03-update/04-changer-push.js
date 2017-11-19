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

/***
 * $push 与 $each 连用，一次添加多个元素
 ***/
// 增加尺寸
db.posts.update({"title":"A Blog Post"},{
    "$push":{
        "size":{
            "$each":[562.776,562.790,559.123]
        }
    }
});















