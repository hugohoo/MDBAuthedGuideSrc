/***
 * 优化 全文索引
 ***/

// 前缀索引 缩小范围
db.blog.ensureIndex({"date":1,post:"text"});

// 后缀索引 覆盖查询
db.blog.ensureIndex({post:"text",author:1});

// 前缀索引 + 后缀索引
db.blog.ensureIndex({"date":1,post:"text",author:1});