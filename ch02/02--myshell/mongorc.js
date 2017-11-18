// 创建 mongorc.js 执行常用脚本
var compliment=["attractive","intelligent","like Batman"];
var index=Math.floor(Math.random()*3);

print("Hello,you are looking paricularly "+compliment[index]+" today");

/***
 *禁止某些危险函数
 ***/
// var no=function()//
// {
//     print("Not on my watch");
// }
//
// //禁止删除数据库
// db.dropDatabase=DB.prototype.dropDatabase=no;
//
// //禁止删除集合
// DBCollection.prototype.drop=no;
//
// //禁止删除索引
// DBCollection.prototype.dropIndex=no;