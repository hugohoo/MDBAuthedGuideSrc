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