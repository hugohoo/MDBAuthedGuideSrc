/***
 * 分组中的算数操作符
 ***/

db.sales.drop();
db.sales.insert(
    [
        {name:"sony",country:"jp",revenue:5000},
        {name:"xiaomi",country:"zh",revenue:2600},
        {name:"meizu",country:"zh",revenue:3000},
        {name:"apple",country:"usa",revenue:2600},
        {name:"sunsam",country:"jp",revenue:2600},
]);

db.sales.find();

// 计算每个国家的总收入
db.sales.aggregate(
    {
        "$group":
            {
                _id:"$country",
                totalRevenue:{"$sum":"$revenue"}
            }
    });

// 计算每个国家的平均收入，以及销售量
db.sales.aggregate(
    {
        "$group":
            {
                _id:"$country",
                totalRevenue:{"$avg":"$revenue"},
                numSales:{"$sum":1}
            }
    });