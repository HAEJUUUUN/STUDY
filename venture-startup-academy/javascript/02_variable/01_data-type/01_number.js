/* 
    data-type은 값의 종류를 말하며 자바스크립트(es6)는 7개의 데이터 타입
    (number, string, boolean, undefined, null, symbol, object)을 제공한다.
*/

// 01. 숫자타입
var integer = 10;
var double = 5.5;
var negative = -10;

// NaN 산술 연산 불가 (not a number)
console.log(integer/0); // Infinity
console.log(integer / -0);  // -Infinity
console.log(1 * '안녕');  // NaN
console.log(10 / 4);  // 2.5

console.log(integer);  // 10
console.log(double);  // 5.5
console.log(negative);  // -10