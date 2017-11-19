/***
 * 正则匹配查询
 ***/
db.users.find({name:/jo/i});

// 以某个字符串开头
db.users.find({name:/^jo/i});

// 正则匹配自身
db.foo.drop();
db.foo.insert({"bar":/baz/});
db.foo.find();

db.foo.find({bar:/baz/});;