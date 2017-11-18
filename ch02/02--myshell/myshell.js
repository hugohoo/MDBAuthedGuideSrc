/***
 *定义 shell 功能
 ***/
// 连接到指定服务器的指定数据库
mongo 127.0.0.1:27017/test

db;

// 启动时不连接任何数据库
mongo --nodb

// 启动后转链接其他数据库
conn=new Mongo("127.0.0.1:27017");
db=conn.getDB("blog");

// 查看帮助
help

// 查看数据库级别帮助
db.help();

// 查看集合级别帮助
db.blog.help();

//查看函数的用法
db.blog.update;

// 加载脚本 defineConnectTo.js
typeof connectTo;

load('defineConnectTo.js');

typeof connectTo;

// 查看当前工作目录
run("pwd");

// 启动时禁止加载 .mongorc.js
mongo --norc


// 调用编辑器编辑复杂变量
var wap=db.blog.findOne();

edit wap;

/***
 *访问特殊集合
 ***/
db.version;// 仅仅访问了内部的方法

db.getCollection("version"); //获取到集合