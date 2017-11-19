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