/***
 *大批量修改器的效率
 ***/

/***
 * 批量增长效率
 ***/
db.tester.drop();
db.tester.insert({"x":1});
db.tester.find();
var timeInc=function() {
    var start=(new Date()).getTime();

    for(var i=0;i<10000;i++){
        db.tester.update({},{
            "$inc":{"x":1}
        })
    }

    var timeDiff=(new Date()).getTime() -start;
    print("耗时："+timeDiff+"ms");
}

timeInc();  // 4741ms

/***
 * 批量插入元素的效率
 ***/
var timePush=function() {
    var start=(new Date()).getTime();

    for(var i=0;i<10000;i++){
        db.tester.update({},{
            "$push":{"x":1}
        })
    }

    var timeDiff=(new Date()).getTime() -start;
    print("耗时："+timeDiff+"ms");
}

timePush(); //9680ms

/***
 *开/关二次幂空间分配
 ***/
db.runCommand({"collMod":"tester","usePowerOf2Sizes":true});
db.runCommand({"collMod":"tester","usePowerOf2Sizes":false});