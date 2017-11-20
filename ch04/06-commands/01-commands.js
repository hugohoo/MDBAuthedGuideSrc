/***
 * 数据库命令
 ***/
// 删除集合的命令
db.runCommand({"drop":"blog"});  // 等价于 db.blog.drop();
db.blog.find();

// 获取最近错误的命令
db.runCommand({"getLastError":1});

// 查看命令集合
db.listCommands();