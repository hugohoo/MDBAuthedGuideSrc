/***
 *完全替换文档
 ***/

/***
 *添加用户集合
 ***/
db.users.insert({
    "name":"joe",
    "friends":32,
    "enemies":2
});

db.users.findOne();

/***
 *替换文档结构
 ***/
    //查询
var joe=db.users.find({"name":"joe"});

//增加新字段
joe.username=joe.name;
joe.relationships={
    "friends":joe.friends,
    "enemies":joe.enemies
};


//删除旧字段
delete joe.name;
delete joe.friends;
delete joe.enemies;

//更新joe
db.users.update({"name":"joe"},joe);

db.users.findOne();

/***
 * 多个匹配记录易导致更新失败
 ***/
//创建人
db.people.insert([
    {"_id":0,"name":"joe",age:65},
    {"_id":1,"name":"joe",age:20},
    {"_id":2,"name":"joe",age:49}
]);

db.people.find();

//更新
joe=db.people.findOne({"name":"joe","age":20});
joe.age++;
db.people.update({"name":"joe"},joe);

//使用 _id 更新
db.people.update({"_id":2},joe);
db.people.find();
