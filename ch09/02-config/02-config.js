/***
 * 配置 主从关系
 ***/
mongo --nodb

// 设置 副本集配置对象
var replSetConfig=
    {
        _id:"spock",// 必须是副本集标识符
        members: //配资成员
            [
                {_id:0,host:"localhost:27017"},// 主服务
                {_id:1,host:"localhost:27018"},// 从服务
                {_id:2,host:"localhost:27019"},// 从服务
            ]
    }

// 连接到 可能有原始数据的 主服务
db=(new Mongo("localhost:27017")).getDB("kk");

// 初始化副本集
rs.initiate(replSetConfig);
