/***
 * 不同语言不同的分词机制
 ***/
// 创建 全文索引 时候，设置 默认语言
db.users.ensureIndex({profile:"text"},
    {"default_language":"french"});

// 插入文档时，设置语言
db.users.insert({username:"swedishChef",profile:"Bork de bork",language:"swedish"});