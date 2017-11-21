/***
 * 查询某个键的所有不同值 distinct
 ***/
db.people.drop();
db.people.insert([
    {"_id":0,"name":"joe",age:65},
    {"_id":1,"name":"bob",age:20},
    {"_id":2,"name":"kimi",age:49}
]);

db.people.find();

// 查询 age 所有不同的值
db.runCommand({"distinct":"people","key":"age"});