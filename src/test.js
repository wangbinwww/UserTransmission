//数据体
var DataJson = '{"id":"1","name":"王彬","age":"23"}';
//Json 对象
var persons = {}
//预录入数据
var person = {
    "id": 2,
    "name": "白眉鹰王",
    "age": 44
}
//将二进制的数据转换为字符串
//var persons = DataJson.toString();
//将字符串转换为json对象
persons = JSON.parse(DataJson);
persons.push(person); //将传来的对象push进数组对象中
//定义一下总条数，为以后的分页打基础
//person.total = person.data.length; 
console.log(persons);