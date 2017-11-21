/***
 * 拆分
 ***/
db.blog.drop();
db.blog.insert({
    content:"...",
    comments:[
        {
            author:"joe",
            score:3,
            comment:"nice post"
        },
        {
            author:"mary",
            score:6,
            comment:"terrible post"
        },
        {
            author:"joe",
            score:7,
            comment:"not bad"
        }
    ]
});
db.blog.find();

// 以评论拆分
db.blog.aggregate({"$unwind":"$comments"});

// 获取所有 joe 的评论
db.blog.aggregate(
    {"$project":{comments:"$comments"}},
    {"$unwind":"$comments"},
    {"$match":{"comments.author":"joe"}});

db.blog.aggregate(
    {"$project":{comments:"$comments"}});

