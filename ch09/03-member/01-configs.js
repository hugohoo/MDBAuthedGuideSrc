/***
 * 副本集成员的各种可选配置
 ***/
// 添加仲裁者
rs.addArb("ip:port");

// 上面等价于
rs.add({_id:4,host:"ip:port",arbiteronly:true});

// 设置优先级
rs.add({_id:4,host:"ip:post",priority:1.5});

// 隐藏成员，必须是0优先级
var config=rs.config();
config.members[2].hidden=0;
config.members[2].priority=0;