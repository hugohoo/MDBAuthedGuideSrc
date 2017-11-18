/***
 * CRUD 操作
 ***/

/***
 * 创建文档
 ***/
post=//
    {
        "title":"My Blog Post",
        "content":"Here is my blog post.",
        "date":ISODate("2012-08-24T21:12:09.982Z")
    }

//插入（创建）新文档
db.blog.insert(post);

// 查询集合 blog
db.blog.find();

/***
 *查询一条记录
 ***/
db.blog.findOne();

/***
 *更新文档
 ***/
// 增加 comments 评论功能
post.comments=[];
db.blog.update({title:"My Blog Post"},post);
db.blog.findOne();

/***
 *删除文档
 ***/
db.blog.remove({title:"My Blog Post"});

