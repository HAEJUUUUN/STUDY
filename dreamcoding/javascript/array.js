'use strict'

// Array

// 1. Declaration
const arrr1 = new Array();
const arrr2 = [1,2];


// 2. Index Position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);  // 🍎
console.log(fruits[1]);  // 🍌
console.log(fruits[2]);  // 배열 범위 밖의 인덱스에 접근하면 undefined
console.log(fruits[fruits.length - 1]);  // 제일 마지막 인덱스

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition,  deletion, copy
// push, add an item to the end
fruits.push('🍒', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// Note! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍈', '🍉', '🍍');
console.log(fruits);
fruits.splice(1);  // 지우려고 하는 개수를 말하지 않으면 인덱스 숫자부터 끝까지 제거됨
console.log(fruits);
fruits.splice(1, 1, '🥝', '🍇');  // 인덱스가 지워진 자리에 추가된 내용이 들어감

// combine teo arrays
const fruits2 = ['🍅', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));  // 0
console.log(fruits.indexOf('🍉'));  // 2
console.log(fruits.indexOf('🥥'));  // -1

// includes
console.log(fruits.includes('🍉'));  // true
console.log(fruits.includes('🥥'));  // false


// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));  // 0
// indexOf는 제일 첫번째로 해당하는 값을 만나면 그 값이 들어있는 인덱스를 리턴.
console.log(fruits.lastIndexOf('🍎'));  // 5
