/***
 * 匹配器操作符 $match
 ***/
db.articles.aggregate({"$match":{author:"joe"}});