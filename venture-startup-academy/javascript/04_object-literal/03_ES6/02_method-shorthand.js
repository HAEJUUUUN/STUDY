var dog = {
    name: '뽀삐',
    eat: function (food) {  
        console.log(`${this.name}이(가) 먹는 ${food}!`);
    }
};

dog.eat('고구마');

// ES6에서 메소드를 정희할 때  function이라는 키워드를 생략한 축약 표현을 사용할 수 있다.
var dog2 = {
    name: '해피',
    eat (food) {  // function 사라짐. es6부터 사용 가능해짐
        console.log(`${this.name}이(가) 먹는 ${food}!`);
    }
};

dog.eat('계란');