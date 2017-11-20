/***
 * 创建全文索引
 ***/
// 开启全文索引
db.adminCommand({"setParameter":1,"textSearchEnabled":true});

// mongod --setParameter textSearchEnabled=true;	//命令行


// 使用 全文索引
db.runCommand({"text":"hn","search":"ask hn"});

/***
 * 创建 全文索引
 ***/
db.blobs.drop();
db.blobs.insert([
    {title:"开心玩",author:"参考消息",desc:"傻逼中的战斗机"},
    {title:"sina",author:"新浪",desc:"中国的fb"},
    {title:"qq",author:"腾讯",desc:"永远在抄袭，从未被超越"},
]);

db.blobs.find();

// 创建 多键全文索引，并设置权重
db.blobs.ensureIndex({title:"text",author:"text",desc:"text"},
    {"weights":{title:3,author:2}});

db.blobs.getIndexes();

// 对所有字符串字段创建 全文索引
db.users.ensureIndex({"$**":"text"});

db.users.getIndexes();

