/***
 * 逻辑查询
 ***/
// 指定范围内查询
db.users.find({name:{"$in":["joe","mm"]}});

// 指定范围外查询
db.users.find({name:{"$nin":["joe","mm"]}});

// 或 查询
db.users.find({"$or":[
    {name:"joe"},
    {age:18}
]});

// $or 与 $
db.users.find({"$or":[
    {name:"joe"},
    {age:{"$in":[27,18]}}
]});