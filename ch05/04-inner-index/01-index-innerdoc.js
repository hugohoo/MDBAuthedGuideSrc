/***
 * 嵌套文档的索引
 ***/
db.users.drop();
db.users.insert({
    username:"sid",
    loc:{
        ip:"1.2.3.4",
        city:"Springfield",
        state:"NY"
    }
});
db.users.find();

// 在嵌套文档的字段上建立索引
db.users.ensureIndex({"loc.city":1});