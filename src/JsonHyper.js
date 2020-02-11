'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle - school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming, null, ' ');
console.log(s);
var s2 = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
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