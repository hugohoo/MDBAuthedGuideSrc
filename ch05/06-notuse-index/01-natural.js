/***
 * $natural 强制全表扫描，返回磁盘顺序
 ***/
db.users.find().hint({"$natural":1});