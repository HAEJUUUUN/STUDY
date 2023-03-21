// 함수 선언문
// 이름을 주면 해당 이름의 회원에게 인사하는 기능
function hello(name) {
    // var str = `${name}님 안녕하세요!`
    // return str;
    
    return `${name}님 안녕하세요!`;
}

console.log(hello('홍길동'));

var hello2 = function hell() {
    return 'hell';
};

console.log(hello2());
console.log(hell());

// 함수 표현식을 일반적으로 익명함수(이름없는 함수, anonymous)를 활용한다.
var hello3 = function() {
    return '익명함수를 활용한 함수 표현식';
};