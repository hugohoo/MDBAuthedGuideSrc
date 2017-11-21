/***
 * 分组命令引导
 ***/
db.stocks.drop();
db.stocks.insert(
    [
        {"day" : "2010/10/03","time" : "10/3/2010 03:57:01 GMT-400","price" : 4.23},
        {"day" : "2010/10/04","time" : "10/4/2010 11:28:39 GMT-400","price" : 4.27},
        {"day" : "2010/10/03","time" : "10/3/2010 05:00:23 GMT-400","price" : 4.10},
        {"day" : "2010/10/06","time" : "10/6/2010 05:27:58 GMT-400","price" : 4.30},
        {"day" : "2010/10/04","time" : "10/4/2010 08:34:50 GMT-400","price" : 4.01},
    ]);
db.stocks.find();


// 查询每天的最后一笔交易
db.runCommand(
    {
        "group":
            {
                "ns":"stocks",  //分组集合
                "key":"day",//分组键
                "initial":{time:0},//初始化 reduce 参数文档
                "$reduce":function(doc,prv)//每组中的筛选函数 reduce
                {
                    if(doc.time>prv.time)
                    {
                        prv.time=doc.time;
                        prv.price=doc.price;
                    }
                }
            }
    });

// 查询最近30天每天的最后一笔交易
db.runCommand(
    {
        "group":
            {
                "ns":"stocks",  //分组集合
                "key":"day",//分组键
                "initial":{time:0},//初始化 reduce 参数文档
                "$reduce":function(doc,prv)//每组中的筛选函数 reduce
                {
                    if(doc.time>prv.time)
                    {
                        prv.time=doc.time;
                        prv.price=doc.price;
                    }
                },
                "condition":{day:{"$gt":"2010/09/30"}}
            }
    });