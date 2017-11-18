// 自定义连接函数脚本
var connectTo=function(port,dbname)//
{
    if(!port)//
    {
        port=27017;//默认端口
    }

    if(!dbname) //
    {
        dbname="test";//默认连接的数据库
    }

    // db 指向目标数据库
    db=connect("localhost:"+post+"/"+dbname);
    return db;
}