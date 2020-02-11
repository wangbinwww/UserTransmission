'use strict';

var XiaoMing = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle - school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(XiaoMing, null, ' ');
console.log(s);
var s2 = JSON.stringify(XiaoMing, ['name', 'skills'], '  ');
console.log(s2);

var qtt = {}; //定义消息（可以为字符串、对象等）
qtt.temp = 25.7 + Math.random() * 5;
qtt.humi = 89.1 + Math.random() * 10;
qtt.count = 0;
qtt.count1 = 10;
setInterval(function () { //定时器
    qtt.count++;
    qtt.temp = (25.7 + Math.random() * 5).toFixed(2);
    qtt.humi = (89.1 + Math.random() * 10).toFixed(2); //2位小数
    console.log(JSON.stringify(qtt, null, ' '));
}, 5000);
setInterval(function () { //定时器
    qtt.count1++;

}, 5000);

//----------------------------------------------
// push 数据到 json 对象  方式 1 字符串方式需要转换
var paramsJson = "id: 1,name: 王彬"
var paramJson = {
    "id": 2,
    "name": "白眉鹰王"
}

var person = paramsJson.toString(); //将二进制的数据转换为字符串
person = JSON.parse(person); //将字符串转换为json对象
person.data.push(params); //将传来的对象push进数组对象中
person.total = person.data.length; //定义一下总条数，为以后的分页打基础
console.log(person.data);

// push 数据到 json 对象  方式 1 对象方式直接 push
var paramsJson = {
    "id": 1,
    "name": "王彬"
}
var paramJson = {
    "id": 2,
    "name": "白眉鹰王"
}

var person = paramsJson.toString(); //将二进制的数据转换为字符串
person = JSON.parse(person); //将字符串转换为json对象

person.data.push(params); //将传来的对象push进数组对象中
person.total = person.data.length; //定义一下总条数，为以后的分页打基础
console.log(person.data);


//----------------------------------------------
//json字符串转对象
var str = '{"persons":[{"id":"1","name":"山姆","age":"23"},{"id":"2","name":"比尔","age":"23"}]}';
var strToObj = JSON.parse(str);
console.log(strToObj);

//json对象转字符串
var obj = {
    "persons": [{
        "id": "1",
        "name": "山姆",
        "age": "23"
    }, {
        "id": "2",
        "name": "比尔",
        "age": "23"
    }]
} //json对象
var objToStr = JSON.stringify(obj);
var objToStr = JSON.stringify(obj, null, ' ');
console.log(objToStr);

//----------------------------------------------
//json对象应用
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
//查询整个 json 对象的方法
console.log(persons)
console.log(persons['persons'])
console.log(persons['persons'][0])
console.log(persons['persons'][0]['name'])
//遍历 json 对象的 key
console.log(Object.keys(persons))

//----------------------------------------------
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
//obj增加
persons.persons.push(person)
console.log(persons.persons);

//----------------------------------------------
//obj与 json 转换
var person = {
    "name": "张八",
    "age": 23,
    "gender": true
}
person.nem = 7

console.log(person)
console.log(JSON.stringify(person))
var abc = '{"name":"张八","age":23,"gender":true,"nem":7}'
console.log(JSON.parse(abc))

//OBJ排序
var persons = {
    "persons": [{
        "id": "1",
        "name": "山姆",
        "age": "23"
    }, {
        "id": "2",
        "name": "比尔",
        "age": "24"
    }, {
        "id": "3",
        "name": "小比尔",
        "age": "10"
    }, {
        "id": "4",
        "name": "小山姆",
        "age": "8"
    }]
}
var abc = persons.persons;
//console.log(abc);
abc.sort(compare('age'));
console.log(abc);
var str = [{
        name: "a",
        age: 50
    },
    {
        name: "b",
        age: 20
    },
    {
        name: "c",
        age: 40
    },
    {
        name: "d",
        age: 30
    },
    {
        name: "e",
        age: 1
    },
];
str.sort(compare('age'));
console.log(str);

function compare(key) {
    return function (value1, value2) {
        var val1 = value1[key];
        var val2 = value2[key];
        return val1 - val2;
    }
}

//排序
var arr = []
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Word"
arr[5] = "Martin"
console.log(arr.sort())

//首字母排序
//var arr = []
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"
console.log(arr.sort())

//按值排序
//var arr = []
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"
console.log(arr.sort(sortNumber))

function sortNumber(a, b) {
    return a - b
}