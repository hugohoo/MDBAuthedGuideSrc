/***
 * 内嵌文档查询
 ***/

/***
 *点语法查询
 ***/
db.people.drop();
db.people.insert({
    name:{
        first:"Joe",
        last:"Schemoe"
    },
    age:45
});
db.people.find();

// 完全匹配子文档
db.people.find({name:{first:"Joe",last:"Schemoe"}});

// 点语法匹配子文档
db.people.find({"name.first":"Joe","name.last":"Schemoe"});