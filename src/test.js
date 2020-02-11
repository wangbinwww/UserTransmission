//数据体
var DataJson = '{"persons":[{"id":"1","name":"山姆","age":"23"},{"id":"2","name":"比尔","age":"23"}]}';

var person = {
    "id": "1",
    "name": "山姆",
    "age": "23"
}
var persons = {
    "persons": [{
        "id": "1",
        "name": "山姆",
        "age": "23"
    }, {
        "id": "2",
        "name": "比尔",
        "age": "23"
    }]
}

//获取JSON中的值,直接获取或遍历

//基本格式
var person = {
    "name": "张八",
    "age": 23,
    "gender": true
}
//遍历
for (var key in person) {
    //获取键和值 key为字符串格式
    console.log(key + ":" + person[key]);
}
//数组格式
var ps = [{
    "name": "张三",
    "age": 23,
    "gender": true
}, {
    "name": "李四",
    "age": 24,
    "gender": true
}, {
    "name": "王五",
    "age": 25,
    "gender": false
}]
//遍历
for (var i = 0; i < ps.length; i++) {
    var p = ps[i];
    for (var key in p) {
        console.log(key + ":" + p[key]);
    }
}
//嵌套格式
var persons = {
    "persons": [{
            "name": "张三",
            "age": 23,
            "gender": true
        },
        {
            "name": "李四",
            "age": 24,
            "gender": true
        },
        {
            "name": "王五",
            "age": 25,
            "gender": false
        }
    ]
};
//获取王五的值
var name = persons.persons[2].name
console.log('name' + "=" + name);

persons.persons[3] = person
console.log(persons.persons);