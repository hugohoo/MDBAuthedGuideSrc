/***
 * 完成器 finalize
 ***/

// 对每天的标签统计
db.posts.group(
    {
        "key":{day:true},
        "initial":{tags:{}},
        "$reduce":function(doc,prv)  //对每个分组中的每个文档进行统计
        {
            for(i in doc.tags)
            {
                if(doc.tags[i] in prv.tags)//如果当前的标签已经被统计过
                {
                    prv.tags[doc.tags[i]]++;//直接累加该标签的数量
                }else // 如果当前的标签没有被统计过
                {
                    prv.tags[doc.tags[i]]=1;//初始化
                }
            }
        }
    });

// 对每天的标签统计,并使用完成器修改最终的目标结果
db.posts.group(
    {
        "key":{day:true},
        "initial":{tags:{}},
        "$reduce":function(doc,prv)  //对每个分组中的每个文档进行统计
        {
            for(i in doc.tags)
            {
                if(doc.tags[i] in prv.tags)//如果当前的标签已经被统计过
                {
                    prv.tags[doc.tags[i]]++;//直接累加该标签的数量
                }else // 如果当前的标签没有被统计过
                {
                    prv.tags[doc.tags[i]]=1;//初始化
                }
            }
        },
        "finalize":function(prv)//完成器最后过滤
        {
            var mostPopular=0;
            for (i in prv.tags)
            {
                if(prv.tags[i]>mostPopular)
                {
                    prv.tag=i;
                    mostPopular=prv.tags[i];
                }
            }
        }
    });