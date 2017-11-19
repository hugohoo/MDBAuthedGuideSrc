/***
 * 填充因子
 ***/
db.coll.insert({"x":"a"});
db.coll.insert({"x":"b"});
db.coll.insert({"x":"c"});
//查看顺序
db.coll.find();
// 查看填充因子
db.coll.stats();
// 修改 b
db.coll.update({"x":"b"},{
    "$set":{"x":"bbb"}
});