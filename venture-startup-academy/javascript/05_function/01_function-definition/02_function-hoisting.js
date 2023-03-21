//함수  호이스팅(function hoisting)

console.log(hello('반갑소'));  // 함수 선언문은 함수 호이스팅에 의해 선언 전에 미리 활용할 수 있다.
console.log(hi);

// 함수 선언문
function hello(name) {
    return `${name}님 안녕하세요!`;
}

// 함수 표현식
var hi = function(name) {  // 대입이 일어나는 시점에야 함수가 정의되기 때문에 호이스팅이 발생하지 않는다.
    return `${name} 안녕~`;
}