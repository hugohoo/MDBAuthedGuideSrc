/***
 * 修改配置
 ***/
// 添加成员
rs.add("ip:port");

// 删除成员
rs.remove("ip:port");

// 修改配置
var replSetConfig=rs.config();
replSetConfig.members[1].host="ip:port";
rs.reconfig(replSetConfig);