/***
 * 简单的游标操作
 ***/
db.coll.drop();
for(var i=0;i<100;i++){
    db.coll.insert({x:i});
}

db.coll.find();

// 获取与遍历游标
var cursor=db.coll.find();
while(cursor.hasNext()){
    doc=cursor.next();
    print(doc.x);
};

// 迭代器遍历游标
cursor.forEach(function(doc){
    print(doc.x);
});