/***
 * 使用 mongofiles 工具，操作 gridfs
 ***/
// 上传文件到 GridFS
mongofiles put test.js

// 列出 GridFS 的文件列表
mongofiles list

// 搜索 GridFS 中的文件
mongofiles search test

// 下载 GridFS 中的文件
mongofiles get test.js

// 删除 GridFS 中的文件
mongofiles delete test.js