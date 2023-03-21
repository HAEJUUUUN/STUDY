// in 연산자
// 객체의 프로터피 존재 여부 확인
var student = {
    name: '유관순',
    age: 16,
    test: undefined
};

console.log('name' in student);  // true
console.log('height' in student);  // false
console.log('test' in student);  // true