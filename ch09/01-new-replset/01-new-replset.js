/***
 * 创建副本集
 ***/
// 无连接启动客户端
mongo --nodb

//创建一个副本集：1主，2从
replicaSet=new ReplSetTest({"nodes":3});


// 启动3个服务进程
replicaSet.startSet();

// 初始化 副本集 的配资
replicaSet.initiate();

// 关闭 副本集
replicaSet.stopSet();