var dog = {
    name: '뽀삐',
    eat: function (food) {  // food는 매개변수
        console.log(`${this.name}은(는) ${food}을(를) 맛있게 먹어요.`);
        return 1;
    }
};

// 1. 마침표 표기법(dot notation)
console.log(dog.name);
console.log(dog.eat('고구마'));  // '고구마'는 전달 인자(argumants)

// 2. 대괄호 표기법(square braket notation)
// 대괄호 안은 반드시 홑따옴표로 감싸야한다.
console.log(dog['name']);
dog['eat']('고구마');

// 대괄호 표기법만 가능한 경우
var obj = {
    'dash-key': 'dash-value',
    0: 1
};

/* 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우
    반드시 대괄호 표기법을 사용한다.(반드시 홑다옴표로 감싸야 한다.)
*/
// console.log(obj.dash-key);
// console.log(obj.'dash-key');
// console.log(obj[dash-key]);
console.log(['dassh-key']);

/*
    프로퍼티 키가 숫자로 이루어진 경우 혼따옴표를 생략할 수 있고
    역시나 대괄호 표기법을 사용해야한다.
*/
// console.log(obj.0);
// console.log(obj.'0');
console.log(obj[0]);
console.log(obj['0']);