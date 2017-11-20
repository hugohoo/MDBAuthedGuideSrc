/***
 * 内嵌文档查询
 ***/

/***
 *点语法查询
 ***/
db.people.drop();
db.people.insert({
    name:{
        first:"Joe",
        last:"Schemoe"
    },
    age:45
});
db.people.find();

// 完全匹配子文档
db.people.find({name:{first:"Joe",last:"Schemoe"}});

// 点语法匹配子文档
db.people.find({"name.first":"Joe","name.last":"Schemoe"});

/***
 * 匹配子文档的多个字段
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
    ]
});
db.blog.find();

db.blog.find(
    {comments:
        {
            "$elemMatch":
                {
                    author:"joe",
                    score:{"$gt":2}
                }
        }
    });