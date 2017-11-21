/***
 * 排序操作 $sort
 ***/
db.employees.drop();
db.employees.insert([
    {firstname:"xiaomi",lastname:"zh",salary:2000,bonus:1000,hiredate:new Date()},
    {firstname:"mezi",lastname:"zh",salary:3000,bonus:2000,hiredate:new Date()},
    {firstname:"apple",lastname:"usa",salary:7000,bonus:3000,hiredate:new Date()},
]);
db.employees.find();

// 选择薪资最高的员工，同薪下名字升序
db.employees.aggregate(
    {
        "$project":
            {
                compensation:
                    {
                        "$add":["$salary","$bonus"]
                    },
                name:1
            }
    },
    {
        "$sort":{compensation:-1,name:1}
    });