/***
 * 启动副本集各副本
 ***/
// 启动 主服务
// mongod  --replSet spock -f mongo.conf --fork
mongod --port 27017  --replSet spock

// 启动 从服务
// mongod --replSet spock -f mongo.conf --fork
mongod --port 27018 --dbpath C:/data/db2 --replSet spock

// mongod  --replSet spock -f mongo.conf --fork
mongod --port 27019 --dbpath C:/data/db3 --replSet spock