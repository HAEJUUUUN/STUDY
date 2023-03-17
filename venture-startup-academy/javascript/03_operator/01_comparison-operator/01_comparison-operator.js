// 01. comparison operator

/* 
    동등 비교 vs 동일 비교
    동등 비교(loose equality) 연산자와 동일(일치) 비교(strict equality) 연산자는
    비교하는 엄격성의 정도가 다르다.
    동등비교(==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값을 지녔는지 비교한다.
    동일비교(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

// 1. 숫자 1, 문자 '1'과 true 비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

// 2. 숫자 1, 문자 '0'과 빈 문자열 '', false 비교
console.log(`0 == '0' : ${0 == '0'}`);
console.log(`0 == '' : ${0 == ''}`);  // 0과 ''빈문자열은 둘다 Falsy한 값이기 때문에 true로 나옴
console.log(`0 == '0' : ${0 == false}`);
console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === '' : ${0 === ''}`);
console.log(`0 === '0' : ${0 === false}`);