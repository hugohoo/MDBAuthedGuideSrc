/***
 * 优化 skip 的使用
 ***/

/***
 * 使用 skip 分页 导致效率低下
 ***/
var page1=db.coll.find().limit(10);
var page2=db.coll.find().skip(10).limit(10);
var page3=db.coll.find().skip(20).limit(10);

/***
 * 使用临界值代替 skip
 ***/
var dividerColl={x:11};
db.coll.find({x:{
    "$gt":dividerColl.x
}}).limit(10);