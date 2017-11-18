/***
 * 增加/减少修改器 $inc 只能针对数值型字段
 ***/
db.games.drop();
db.games.insert({
    "game":"pinball",
    "user":"joe"
});
db.games.findOne();

// 增加分数字段
db.games.update({"game":"pinball","user":"joe"},
    {"$inc":{"score":50}});

// 原分数+10000
db.games.update({"game":"pinball","user":"joe"},
    {"$inc":{"score":10000}});

// 分数-1000
db.games.update({"game":"pinball","user":"joe"},
    {"$inc":{"score":-1000}});

