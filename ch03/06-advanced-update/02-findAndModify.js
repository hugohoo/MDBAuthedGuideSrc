/***
 * 原子性查询并修改文档
 ***/
ps=db.runCommand({"findAndModify":"processes",
    "query":{"status":"READY"},
    "sort":{"priority":-1},
    "update":{
        "$set":{"status":"RUNNING"}
}});

db.processes.find();