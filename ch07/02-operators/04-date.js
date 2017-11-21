/***
 * 日期操作符
 ***/
db.employees.drop();
db.employees.insert([
    {name:"xiaomi",salary:2000,bonus:1000,hiredate:new Date()},
    {name:"mezi",salary:3000,bonus:2000,hiredate:new Date()},
    {name:"apple",salary:7000,bonus:3000,hiredate:new Date()},
]);
db.employees.find();


// 获取员工的入职月份
db.employees.aggregate(
    {
        "$project":
            {
                hiremonth:{"$month":"$hiredate"}
            }
    });

// 取得员工的工作年限
// 字面量日期也可以使用操作符
db.employees.aggregate(
    {
        "$project":
            {
                workdur:
                    {
                        "$subtract":
                            [
                                {"$year":new Date()},
                                {"$year":"$hiredate"}
                            ]
                    }
            }
    });