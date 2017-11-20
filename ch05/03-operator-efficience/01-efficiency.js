/***
 * 高效实用索引
 ***/

/***
 * 精确匹配+范围查询
 ***/
// age 精确匹配， username 范围查询
db.users.find({age:47,username:{
    "$gt":"user5",
    "$lt":"user8"
}}).explain();

/***
 * $or 会尽可能使用每个条件的索引，并将结果集合并去重
 ***/
db.users.find({"$or":[{age:10},{username:"user500"}]}).explain();