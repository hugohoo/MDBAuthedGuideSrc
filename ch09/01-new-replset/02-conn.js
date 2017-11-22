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

/***
 * 连接到 从服务
 ***/
mongo --nodb
secondaryConn=new Mongo("localhost:20001");
secondaryDB=secondaryConn.getDB("kk");

// 尝试查询 主服务 更新的数据
secondaryDB.coll.findOne(); //被拒绝

// 开启 从服务 查询
secondaryConn.setSlaveOk();

// 再次从 从服务 查询
secondaryDB.coll.findOne();//可以啦

// 尝试从 从服务 上写
secondaryDB.coll.insert({count:101});//失败，被拒绝