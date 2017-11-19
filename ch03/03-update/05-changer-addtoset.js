/***
 * 添加到集合修改器 $addToSet
 ***/
db.users.drop();
db.users.insert({
    "username":"joe",
    "emails":[
        "joe@example.com",
        "joe@gmail.com",
        "joe@yahoo.com"
    ]
});

db.users.find();

// $addToSet 避免添加重复的元素
// ——》 不添加
db.users.update({"username":"joe"},{
    "$addToSet":{
        "emails":"joe@gmail.com"
    }
});

// ——》 添加
db.users.update({"username":"joe"},{
    "$addToSet":{
        "emails":"joe@hotmail.com"
    }
});

/***
 * $addToSet 与 $each 连用，添加多个不重复的元素
 ***/
db.users.update({"username":"joe"},{
    "$addToSet":{
        "emails":{
            "$each":["joe@php.net","joe.@example.com","joe@python.org"]
        }
    }
});

