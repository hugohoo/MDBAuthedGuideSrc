/***
 * 启动副本集各副本
 ***/
// 启动 主服务
mongod  --replSet spock -f mongo.conf --fork

// 启动 从服务
mongod --replSet spock -f mongo.conf --fork

mongod  --replSet spock -f mongo.conf --fork