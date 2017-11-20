/***
 * 全文搜索 算法
 ***/

// 普通 or型 匹配
db.runCommand({"text":"hn","search":"ask hn"});

// 精确匹配
db.runCommand({"text":"hn","search":"\"ask hn\""});

// 精确匹配+普通
db.runCommand({"text":"hn","search":"\"ask hn\" ipod"});

// 不包含匹配
db.runCommand({"text":"hn","search":"-startup vc"});