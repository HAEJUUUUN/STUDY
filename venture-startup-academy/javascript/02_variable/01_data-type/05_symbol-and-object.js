// 05. symbol and object

// var key1 = 'key';  // type : string
// var key2 = 'key';
var key1 = Symbol('key');  // type : symbol
var key2 = Symbol('key');

console.log(typeof key1);
console.log(typeof key2);

console.log(key1 == key2);  // false
console.log(Symbol('key') == Symbol('key'));  // false
console.log('key' == 'key');  // true

// object
console.log("오브젝트");
var obj = {
    name: '홍길동',
    age: 19,
    height: 180.7,
    'key1': 'value1',
    eat: function() {
        console.log('밥을 먹음');
    }
};
console.log(obj);  // obj 안의 key, value 전부 나옴
console.log(typeof obj);  // object

console.log(obj.name);  // 홍길동
console.log(obj['name']);  // 홍길동

obj.height = 180.7;
console.log(obj.height);  // 180.7

obj['key1'] = 'value1'
obj['key1'] = 'value2'
obj[key1] = 'value1';   // obj[Symbol('key')]
obj[key2] = 'value2';   // obj[Symbol('key')]

console.log(obj['key1']);   // value2
console.log(obj['key1']);   // value2
console.log(obj[key1]);     // value1
console.log(obj[key2]);     // value2
