/***
 *用户集合
 ***/
db.users.drop();
db.users.insert([
    {name:"joe",age:20},
    {name:"bob",age:27},
    {name:"mm",age:18},
]);
db.users.find();


db.users.drop();
db.users.insert([
    {username:"joe",age:20,email:"joe@example.com"},
    {username:"bob",age:27,email:"bob@gmail.com"},
    {username:"mm",age:18,email:"mm@hotmail.com"},
]);
db.users.find();