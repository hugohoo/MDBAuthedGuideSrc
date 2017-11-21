/***
 * 极值操作符
 ***/
db.scores.drop();
db.scores.insert(
    [
        {name:"xiaomi",grade:3,score:4},
        {name:"meizu",grade:4,score:6},
        {name:"oppo",grade:1,score:1},
        {name:"vivo",grade:1,score:1},
        {name:"huawei",grade:3,score:6},
        {name:"xiaomi",grade:1,score:4},
        {name:"apple",grade:4,score:8},
    ]);
db.scores.find();

// 取出每个年级的最高分和最低分
db.scores.aggregate(
    {
        "$group":
            {
                _id:"$grade",
                lowestScore:{"$min":"$score"},
                highestScore:{"$max":"$score"}
            }
    });

// 先排序，后取出头部和尾部
db.scores.aggregate(
    {
        "$sort":{score:1}
    },
    {
        "$group":
            {
                _id:"$grade",
                lowestScore:{"$first":"$score"},
                highestScore:{"$last":"$score"},
            }
    });