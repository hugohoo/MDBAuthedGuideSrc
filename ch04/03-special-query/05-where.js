/***
 * $where 自定义查询逻辑
 ***/
db.foo.drop();
db.foo.insert([
    {apple:1,banana:6,peach:3},
    {apple:8,spinach:4,watermelon:4}
]);
db.foo.find();

// 自定义查询包含字段值相等的文档的方法
db.foo.find({
    "$where":function(){
        for(current in this){ //外层遍历字段
            for(other in this){ //内层遍历字段
                if(current!=other && this[current]==this[other]) {
                    return true;
                }
            }
        }
    }
});