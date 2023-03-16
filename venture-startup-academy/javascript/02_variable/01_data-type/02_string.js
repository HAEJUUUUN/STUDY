// 02. 문자열 타입
var str = '안녕하세요';
console.log(str);

// 자바스크립트는 기본적으로 '(single quatation) 안에 개행처리를 할 수 없다.
/* var str = '안녕하세요.
반갑습니다' */

// 하지만 `(백틱)을 활용하면 개행 및 공백이 있는 그대로 적용된다.
var multiline = `안녕하세요.
반갑습니다.`;
console.log(multiline);

// 문자열 이어 붙이기
var lastName = "홍";
var firstName = "길동";
console.log(lastName + firstName);  // == console.log("홍" + "길동");

/* 
    표현식(expression)을 일반 문자열에 삽입하기 위해서 템플릿 리터럴(${})과 백틱(`)을 함께 사용하면
    문자열 연산보다 가독성 좋고 간편하게 문자열을 조합할 수 있다.
    *표현식 : 하나의 리터럴이 되게 하는 식
*/
console.log(`제 이름은 ${lastName}${firstName}입니다.`);  // == console.log(`제 이름은 ${lastName + firstName}입니다.`);

