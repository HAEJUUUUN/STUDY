/* 03. convert-to-boolean */

console.log('==== 논리 타입으로 변환 ====');

/*
  자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값)
  또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
  Truthy -> true, Falsy -> false로 암묵적 타입 변환을 한다.
*/
if(true) console.log('if(true)');
if(false) console.log('if(false)');
if(undefined) console.log('if(undefined)');
if(null) console.log('if(null)');
if(0) console.log('if(0');
if(NaN) console.log('if(NaN)');
if('') console.log("if('')");  // 빈 문자열도 Falsy한 값
if('JavaScript') console.log("if('JavaScript')");

/* false, undefined, null, 0, NaN, ''(빈 문자열)은 Falsy 값이며 이 외의 모든 값은 Truthy 값이다. */

/* 조건문 */
/* if문과 else문 */
var num = 3;

/* 
    만약에 num이 5보다 크면 콘솔에 num은 5보다 큽니다. 를 출력한다.
    그렇지 않으면 콘솔에 num은 5보다 작거나 같습니다. 를 출력한다.
*/

if (num > 5) {
  console.log("num은 5보다 큽니다.");
} else {
  console.log("num은 5보다 작거나 같습니다.");
}

if (num == 5) {
  console.log("num은 5입니다.");
} else {
  console.log("num은 5가 아닙니다.");
}

/* if-else if-else문 */
var num = 5;

if (num > 0) {
  console.log("num은 양수입니다.");
} else if (num < 0) {
  console.log("num은 음수입니다.");
} else {
  console.log("num은 0입니다.");
}

/* 삼항 연산자 */
var num = 3;
var result = (num > 5) ? "num은 5보다 큽니다." : "num은 5보다 작거나 같습니다.";

console.log(result);