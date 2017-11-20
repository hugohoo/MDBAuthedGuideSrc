/***
 * 创建固定集合
 ***/
// 创建大小为100000的固定集合，最多容纳文档数为1000
db.createCollection("kkcoll",{capped:true,size:100000,max:1000});

// 向固定集合中插入文档
db.kkcoll.insert({x:1});
db.kkcoll.find();

// 将普通集合转化为固定集合
db.runCommand({"convertToCapped":"people","size":10000});