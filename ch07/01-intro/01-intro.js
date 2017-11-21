/***
 * 聚合引入
 ***/
db.articles.drop();
db.articles.insert([
    {
        author:"joe",
        post:"深粉色费角色为文奸济恶是我认为",
        created:new Date(),
    },
    {
        author:"joe",
        post:"浮动三年级格斗狂人",
        created:new Date(),
    },
    {
        author:"bib",
        post:"风水额是计算机覅计算结果就是",
        created:new Date(),
    },
    {
        author:"joe",
        post:"福克斯女同事公交四公司如果客人",
        created:new Date(),
    },
    {
        author:"mm",
        post:"分段收费是苹果粉丝们公司",
        created:new Date(),
    },
]);

db.articles.find();

// 查询发表文章最多的作者
db.articles.aggregate({"$project":{author:1}},
    {"$group":{_id:"$author",count:{"$sum":1}}},
    {"$sort":{count:-1}},
    {"$limit":1});