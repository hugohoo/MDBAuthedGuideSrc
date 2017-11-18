/***
 *使用各种 修改器 修改源文档记录
 ***/

/***
 *使用增长修改器 $inc
 ***/
// 增加网站访问统计集合
db.analytics.insert({
    "url":"www.example.com",
    "pageviews":52
});

db.analytics.find();


db.analytics.update({"url":"www.example.com"},
    {"$inc":{"pageviews":1}});

/***
 * 设置修改器 $set
 ***/
db.users.drop();
db.users.insert({
    "name":"joe",
    "age":30,
    "sex":"male",
    "location":"Winsconsin"
});

db.users.findOne();

// 增加喜欢的书籍字段
db.users.update({"_id":ObjectId("5a102002163868a301465793")},
    {"$set":{"favorite book":"War and Peace"}});

db.users.findOne();

// 修改喜欢的书籍
db.users.update({"_id":ObjectId("5a102002163868a301465793")},
    {"$set":{"favorite book":"Green Eggs And Ham"}});

// 修改喜欢的书籍的结构
db.users.update({"_id":ObjectId("5a102002163868a301465793")},
    {"$set":{"favorite book":["Cat's Cradle","Foundation Trilogy","Ender's Game"]}});

// 删除不需要的字段 $unset
db.users.update({"_id":ObjectId("5a102002163868a301465793")},
    {"$unset":{"favorite book":1}});

/***
 * 修改内部文档
 ***/
db.posts.drop();
db.posts.insert({
    "title":"A Blog Post",
    "content":"...",
    "author":{
        "name":"joe",
        "email":"joe@example.com"
    }
});
db.posts.findOne();

// 修改内部文档
db.posts.update({"author.name":"joe"},
    {"$set":{"author.name":"joe schemoe"}});