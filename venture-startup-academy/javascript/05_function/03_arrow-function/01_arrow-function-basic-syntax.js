var message;

// 기존 함수 표현식
message = function() {
    return "hello world!";
};
console.log(message());

// function 키워드 생략 가능
message = () => {
    return "arrow function!";
};
console.log(message());

// 함수의 실행 구문이 하나만 있는 경우 중괄호 생략 가능
// 리터럴 or 표현식(하나의 값으로 정해지는 식)을 반환하는 경우에는 return을 생략할 수 있다.
message = () => "arrow function2!";
console.log(message());

message = (val1, val2) => "arrow" + val1 + val2;
console.log(message("Function", "!"));

// 화살표 함수의 매개변수가 한 개일 일때 소괄호 생략 가능
message = val1 => "arrow" + val1;
console.log(message("Functions are Good!"));

// 리터럴 객체를 반환할 때는 {} 및 return 생략시 리터럴 개체에 () 소괄호를 덧씌워야한다.
message = val1 => {prop: "arrow" + val1};
console.log(message("function object return!!").prop) 