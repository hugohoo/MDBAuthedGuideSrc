/***
 * 高级查询
 ***/
// 设置扫描文档上限
db.coll.find()._addSpecial("$maxscan",5);

// 设置起始文档(必须建立索引)
db.coll.find()._addSpecial("$min",{"_id":ObjectId("5a1223792fa9655637e0de52"), "x" : 10 });

// 设置结束文档(必须建立索引)
db.coll.find()._addSpecial("$max",{"_id":ObjectId("5a1223792fa9655637e0de52"), "x" : 10 });

// 查询文档的磁盘位置
db.coll.find()._addSpecial("$showDiskLoc",true);

/***
 * 查询快照
 ***/
db.coll.find().snapshot();