/***
 * 查询数组
 ***/

db.foo.drop();
db.foo.insert([
    {
        "fruit":["apple","banana","peach"]
    },
    {
        "fruit":["apple","kumquat","orange"]
    },
    {
        "fruit":["cherry","banana","apple"]
    },
]);

db.foo.find();

// 查询包含指定元素的数组
db.foo.find({fruit:"banana"});

// 匹配多个元素
db.foo.find({fruit:{"$all":["apple","banana"]}});

// 完全精确匹配
db.foo.find({"fruit":["apple","banana","peach"]});

// 指定位置元素匹配
db.foo.find({"fruit.2":"peach"});

// 指定长度数组的查询
db.foo.find({fruit:{"$size":3}});

/***
 * 返回指定匹配数组的子集
 ***/
// 返回前2个元素
db.foo.find({},{fruit:{"$slice":2}});

// 返回后2个元素
db.foo.find({},{fruit:{"$slice":-2}});

// 返回后指定偏移数量的子集
db.foo.find({},{fruit:{"$slice":[1,2]}});

// 返回一个匹配的数组元素
db.foo.find({fruit:"apple"},{"fruit.$":1});

/***
 *数组范围查询
 ***/
db.nums.drop();
db.nums.insert([
    {x:5},
    {x:15},
    {x:25},
    {x:[5,25]},
]);
db.nums.find();

// 查询非指定范围
db.nums.find({x:{"$gt":10,"$lt":20}});

// 只匹配数组的元素
db.nums.find({x:{"$elemMatch":{"$gt":4,"$lt":8}}});