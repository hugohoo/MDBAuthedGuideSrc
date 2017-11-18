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