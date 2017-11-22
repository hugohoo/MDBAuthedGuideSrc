/***
 * 手动填充较大字段，为前一个变动较大的字段预备空间
 ***/
// 使用 garbage 为 tags 字段预备空间
db.reviews.drop();
db.reviews.insert(
    {
        _id: ObjectId(),
        restaurant: "Le Cirque",
        review: "Hamburgers were overpriced",
        userid: ObjectId(),
        tags: [],
        garbage: "..........................................................................." +
        "............................................................................." +
        "............................................................................." +
        ".............................................................................",
    });
db.reviews.find();

// 更新时，删除占位字段
db.reviews.update({_id:ObjectId("5a14d179d331a7390c01f402")},
    {
        "$push":
            {
                tags:
                    {
                        $each:["french","fine dining","Hamburgers"]
                    }
            }
    },
    {"$unset":{garbage:true}});