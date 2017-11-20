/***
 * 排序固定集合
 ***/
// 按自然顺序排序固定集合
db.kkcoll.find().sort({"$natural":1});