/***
 * 基于条件的创建或更新
 ***/

/***
 * 不使用 upsert 更新一个文档
 ***/
function updateDirectly(){
    // 检查这个页面是否有文档记录
    blog=db.analytics.findOne({"url":"/blog"});

    //如果有记录，将访问数+1
    if (blog) {
        blog.pageviews++;
        db.analytics.save(blog);
    }else{ // 没有这个记录，新建
        db.analytics.save({"url":"/blog","pageviews":1});
    }
}

updateDirectly();

/***
 * 使用 upsert 快速高效插入
 ***/
db.analytics.update({"url":"/weibo"},{
    "$inc":{
        "pageviews":10
    }
},true);

/***
 * 不匹配时自创建自增长
 ***/
db.users.update({"rep":25},{
    "$inc":{"rep":3}
});
db.users.find();

/***
 * $setOnInsert 仅在创建的时候初始化，之后不再改变
 ***/
db.users.drop();
db.users.find();

db.users.update({},{
    "$setOnInsert":{"createdAt":new Date()}
},true);

// 再次运行不会插入
db.users.update({},{
    "$setOnInsert":{"createdAt":new Date()}
},true);

/***
 * save 函数 ，无则创建文档，有则更新文档
 ***/
db.foo.drop();
db.foo.find();

db.foo.save({x:42});