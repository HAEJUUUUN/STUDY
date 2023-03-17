// 01. dynamically-typed-language

var test;
console.log(typeof test);  // undefined

test = 1;
console.log(typeof test);  // number

test = 'JavaScript';
console.log(typeof test);  // string

test = true;
console.log(typeof test);  // boolean

test = Symbol();
console.log(typeof test);  // symbol

test = {};
console.log(typeof test);  // object

test = [];
console.log(typeof test);  // object

test = function(){};
console.log(typeof test);  // function (function도 object)
console.log(test.prototype);  // {}