/***
 * 数学表达式操作符
 ***/

db.employees.drop();
db.employees.insert([
    {name:"xiaomi",salary:2000,bonus:1000},
    {name:"mezi",salary:3000,bonus:2000},
    {name:"apple",salary:7000,bonus:3000},
]);
db.employees.find();

// 计算薪水之和
db.employees.aggregate(
    {
        "$project":
            {
                _id:0,
                total:
                    {
                        "$add":["$salary","$bonus"]
                    }
            }
    });

// 计算扣除个税后的薪水
db.employees.aggregate(
    {
        "$project":
            {
                _id:0,
                total:
                    {
                        "$subtract":[{"$add":["$salary","$bonus"]},500]
                    }
            }
    });