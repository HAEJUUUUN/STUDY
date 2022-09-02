// Object
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object.
// object = { key : value };

const ob1 = {};  // 'object literal' syntax
const ob2 = new Object();  // 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const sohui = {name: 'sohui', age: 23};
print(sohui);

// with JavaScript magic (dynamically typed language)
// can add properties later
sohui.hasJob = true;  // JS는 동적으로 타입이 런타임 때에 결정되는 언어이기 때문에 뒤늦게 property를 추가할 수 있음.
console.log(sohui.hasJob);

delete sohui.hasJob;  // 삭제도 가능
console.log(sohui.hasJob);


// 2. Computed properties
// key should be always string type
console.log(sohui.name);
console.log(sohui['name']);  // 출력 결과 위와 동일
sohui['hasJob'] = true;
console.log(sohui.hasJob);  

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(sohui, 'name');
printValue(sohui, 'age');


// 3. Property value shorthand
const person1 = {name: 'seoyoung', age: 23};
const person2 = {name: 'taeri', age: 33};
const person3 = {name: 'Florence', age: 27};
const person4 = new Person('Cate', 54);
console.log(person4);


// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in sohui);  // true
console.log('age' in sohui);  // true
console.log('random' in sohui);  // false
console.log(sohui.random);  // undefined


// 6. for..in vs for..of
/// for (key in obj)
console.clear;
for(key in sohui) {
    console.log(key); // sohui 안에 잇는 모든 key들이 출력됨
}

// for (vlaue of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = {name: 'sohui', age: '23'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear;
console.log(user3);  // coder, 23

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue
console.log(mixed.size);  // big