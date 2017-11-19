/***
 * 删除数组元素的修改器
 ***/

/***
 * $pop 弹出修改器，基于位置删除数组的指定位子元素
 ***/
db.keys.insert({
    keys:[1,4,6,8]
});
db.keys.find();

//从尾部删除一个元素
db.keys.update({"_id":ObjectId("5a10f373163868a301465798")},{
    "$pop":{
        "keys":1
    }
});

//从头部删除一个元素
db.keys.update({"_id":ObjectId("5a10f373163868a301465798")},{
    "$pop":{
        "keys":-1
    }
});