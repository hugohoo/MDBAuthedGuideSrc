/***
 * 随机读取一个文档
 ***/
db.people.drop();
db.people.insert([
    {name:"joe",random:Math.random()},
    {name:"john",random:Math.random()},
    {name:"jim",random:Math.random()},
]);
db.people.find();

function randomPeople(){
    var randPeople=db.people.findOne({
        random:{"$gt":Math.random()}
    });
    if (randPeople==null) {
        randPeople=db.people.findOne({
            random:{"$lt":Math.random()}
        });
    }
    return randPeople;
}

var randPeople=randomPeople();

print(randPeople.name+" ——》"+randPeople.random);