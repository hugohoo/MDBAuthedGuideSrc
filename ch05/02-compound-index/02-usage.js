/***
 * 复合索引的用法
 ***/

/***
 * 多条件排序时候，最好建立与排序顺序一致的索引
 ***/
// 建立 age 升序， username 倒序 的复合索引
db.users.ensureIndex({age:1,username:-1});

// 使用一致顺序的索引
db.users.find({age:{
    "$gte":21,
    "$lte":30
}},{_id:0,i:0,created:0}).sort({age:1,username:-1}).explain();