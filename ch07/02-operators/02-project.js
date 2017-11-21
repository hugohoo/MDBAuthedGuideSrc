/***
 * 投射操作符 $project
 ***/
// 投射选取字段
db.articles.aggregate({"$project":{author:1,_id:0}});

// 投射重命名
db.articles.aggregate({"$project":{userid:"$_id",_id:0}});