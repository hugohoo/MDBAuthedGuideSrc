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

// 定制 shell 提示 —— 显示当前时间
// prompt=function()//
// {
//     return (new Date())+"> ";
// }

// 定制 shell 提示 —— 显示当前使用的数据库
prompt=function()//
{
    if (typeof db=="undefined") //
    {
        return "(nodb)> ";
    }

    // 检查最后的数据库操作
    try//
    {
        db.runCommand({getLastError:1});
    }catch(e)//
    {
        print(e);
    }

    return db+">";
}


EDITOR="D:/Sublime Text 3/sublime_text";