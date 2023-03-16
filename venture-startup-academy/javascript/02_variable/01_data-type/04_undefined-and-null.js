// 04. undefined and null

// undefined type
/*
    var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화되므로
    변수를 선언한 이루 값을 할당하지 않은 변수는 undefined를 지닌다.
    개발자가 의도적으로 변수에 할당하는 것은 본래 취지에 맞지 않고 혼란을 야기할 수 있으므로 지양한다.
*/
var undef;
console.log(undef);

// null type
// 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
var nullVal = 'string';
nullVal = null;  // 이전 참조를 제거하여 더 이상 아무것도 참조하지 않는다.
console.log(nullVal);