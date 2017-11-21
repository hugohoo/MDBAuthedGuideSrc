/***
 * 统计总数命令 count
 ***/

// 查询集合的文档数量
db.foo.count();

// 查询复合条件的文档数量
db.foo.count({x:1});