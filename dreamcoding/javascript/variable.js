// Whole-script strict mode syntax
// Jsvascript is very flexible
// flexible === dangerous
// added ECMAScript5

// 1. Use strict
// added int ES 5
// use this for Valina Javascript
'use strict';


// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'sohui';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!) because var는 값을 선언하기 전에 값을 할당할 수 있어서
// var hoisting (move declaration from bottom to top)
// has no block scope
age = 4;
console.log(age);
var age;

// let은 에러발생
// name = 4;
// let name;


// 3. Constants
// favor immutable data type always for a few reasons;
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single item: Number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// number - special numeric values: infinity, -infinity, NAN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;  // over ((-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string
const char = 'c';
const sohui1 = 'sohui';
const greeting = 'hello '+sohui;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${sohui1}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;  // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2);  // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol10}`);


// object, real-lifeobject, data structure
const sohui = {name: 'sohui', age: 23};


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);  // 75
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);  // 4