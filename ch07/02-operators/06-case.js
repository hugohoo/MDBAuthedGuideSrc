/***
 * 诸多投射操作符连用提取的例子
 ***/
db.students.drop();
db.students.insert(
    [
        {name:"xiaomi",teachersPet:false,attendanceAvg:60,testAvg:79,quizzAvg:66},
        {name:"mezi",teachersPet:true,attendanceAvg:90,testAvg:80,quizzAvg:90},
        {name:"apple",teachersPet:false,attendanceAvg:90,testAvg:90,quizzAvg:95},
    ]);

db.students.find();

// 为每个学生打分
db.students.aggregate(
    {
        "$project":
            {
                grade:
                    {
                        "$cond":
                            [
                                "$teachersPet",
                                100,
                                {
                                    "$add":
                                        [
                                            {"$multiply":[0.1,"$attendanceAvg"]},
                                            {"$multiply":[0.3,"$quizzAvg"]},
                                            {"$multiply":[0.6,"$testAvg"]},
                                        ]
                                }
                            ]
                    }
            }
    });