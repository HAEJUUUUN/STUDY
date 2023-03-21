function hi(name = '홍길동') {  // 매개변수에 전달인자가 전달되지 않을 시 초기값 설정
    // 적절한 값이 전달되었는지 조건문으로 활용해보자.
    // 전달인자가 최소한 하나의 문자열이라도 있어서 매개변수인 name에 담겨야한다.
    // console.log(arguments);
    // console.log(arguments[0]);
    // console.log(arguments[1]);

    console.log('함수 실행됨!');
    for(var key in arguments) {
        console.log(`${key} : ${arguments[key]}`);
    }

    if(arguments.length < 1 || typeof arguments !== 'string') {
        console.log('최소한 하나의 문자열을 넘겨줘야 합니다!');
    }

    return `${name} 안녕!`;
}

var result = hi();
result = hi('이순신');
result = hi('이순신', '강감찬');
console.log(result);