/***
 *使用各种 修改器 修改源文档记录
 ***/
// 增加网站访问统计集合
db.analytics.insert({
    "url":"www.example.com",
    "pageviews":52
});

db.analytics.find();

// 使用增长修改器 $inc
db.analytics.update({"url":"www.example.com"},
    {"$inc":{"pageviews":1}});

