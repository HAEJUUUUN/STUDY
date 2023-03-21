function hello(name) {
    // return 이후 코드는 실행되지 않고 접근할 수 없다.
    // return 구문이 없어도 return;가 자동으로 작성된다.
    // return `${name}님 안녕하세요!`

    // 함수는 일급객체로 함수의 매개변수에 전달할 수도 있고 반환할 수도 있다.
    return function(age) {
        return `${age} 값을 지닌 내부 함수`;
    }
}

console.log(hello('피카츄')(19));