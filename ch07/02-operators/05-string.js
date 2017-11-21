/***
 * 字符串操作符
 ***/
db.employees.drop();
db.employees.insert([
    {firstname:"xiaomi",lastname:"zh",salary:2000,bonus:1000,hiredate:new Date()},
    {firstname:"mezi",lastname:"zh",salary:3000,bonus:2000,hiredate:new Date()},
    {firstname:"apple",lastname:"usa",salary:7000,bonus:3000,hiredate:new Date()},
]);
db.employees.find();

// 拼接员工的邮箱
db.employees.aggregate(
    {
        "$project":
            {
                email:
                    {
                        "$concat":
                            [
                                {"$substr":["$firstname",0,1]},
                                ".",
                                "$lastname",
                                "@example.com"
                            ]
                    }
            }
    });