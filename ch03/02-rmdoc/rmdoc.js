/***
 * 删除文档
 ***/

// 删除集合中的全部文档
db.foo.remove({});

/***
 * 批量插入大量文档
 ***/
for(var i=0;i<10000;i++) {
    db.tester.insert({"foo":"bar","baz":1,"z":10-i});
}

/***
 * 计算批量删除的时间
 ***/
var timeRemoves=function() {
    var start=(new Date()).getTime();
    // db.tester.remove({}); //75ms
    db.tester.drop();   // 2ms
    db.tester.findOne();
    var timeDiff=(new Date()).getTime() -start;
    print("耗时："+timeDiff+"ms");
}

timeRemoves();

db.tester.findOne();