/***
 * 连接副本集
 ***/

/***
 * 连接到主服务
 ***/
mongo --nodb

masterConn=new Mongo("localhost:20000");

// 使用 kk 数据库
masterDB=masterConn.getDB("kk");

// 查看是否是 主服务
masterDB.isMaster();

// 向主服务中插入测试数据
masterDB.coll.drop();
for (var i=0;i<100;i++) {
    masterDB.coll.insert({count:i});
}
masterDB.coll.count();