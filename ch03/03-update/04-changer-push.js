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

/***
 * $push 与 $slice 连用，可以固定数组的长度，达到栈的功能
 ***/
db.posts.update({"title":"A Blog Post"},{
    "$push":{
        "size":{
            "$each":[1,2,3,4,5],
            "$slice":-4
        }
    }
});

/***
 * $push 与 $sort 连用，对新增的元素进行排序
 ***/
db.posts.update({"title":"A Blog Post"},{
    "$push":{
        "top10":{
            "$each":[
                {"name":"Nightmare on Elm Street","rating":6.6},
                {"name":"Saw","rating":4.3},
            ],
            "$slice":-4,
            "$sort":{"rating":-1}
        }
    }
});

/***
 * $push 与 $ne 连用，确保只有不存在的时候才添加进去
 ***/
db.papers.insert({
    "name":"ccav",
    "authors cited":["ckxx","dgzy"]
});
db.papers.find();

db.papers.update({"authors cited":{"$ne":"ckxx"}},{
    "$push":{
        "authors cited":"ckxx"
    }
});









