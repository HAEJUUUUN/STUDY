// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);  // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('sohui\'s book');


// 2. Numeric operators
console.log(1 +1);  // add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // reminder (나머지)
console.log(2 ** 3);  // exponentiation (제곱)


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y
x -= 7;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);
// or연산자는 처음으로 true가 나오면 거기서 멈춤. why? or중에서 하나라도 true이면 true이기 때문

// often used to compress long if-statement
// nullableObject && nullableObject.sonmething
if(nullableObject != null) {
    nullableObject.sonmething;
}

function check() {
    for(let i = 0; i < 10; i++) {
        // wasting time
        console.log('💙');
    }
    return true;
}

// ! (not)
console.log(value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// == strict equality, no type conversion
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive);  // true

// object equality by reference
const sohui1 = { name: 'sohui' };
const sohui2 = { name: 'sohui' };
const sohui3 = sohui1;
console.log(sohui1 == sohui2);  // false
console.log(sohui1 === sohui2);  // false
console.log(sohui1 === sohui3);  // true

// equality - puzzler
console.log(0 == false);  // true
console.log(0 == false);  // false  
console.log('' == false);  // true
console.log('' == false);  // false
console.log(null == undefined);  // true
console.log(null == undefined);  // false


// 8. Conditional operators: if
// if, else if, else
const name = 'sohui';
if(name === 'sohui') {
    console.log('Welcome, Sohui!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'sohui' ? 'yes' : 'no');


// 10. Switch statement
// use for mutiple if checks
// use for enum-like value check
// use for mutiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i = i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i = i++) {
    for (let j = 0; i < 10; i = i++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i = i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i = i++) {
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}