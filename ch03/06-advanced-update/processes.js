/***
 * 进程集合
 ***/
db.processes.drop();
db.processes.insert([
    {priority:1,status:"RUNNING"},
    {priority:2,status:"RUNNING"},
    {priority:3,status:"READY"},
    {priority:4,status:"READY"},
    {priority:1,status:"DONE"},
]);
db.processes.find();