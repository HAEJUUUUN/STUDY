// 1. 동일한 스코프에 동일한 변수명 중복 선언 가능
var msg = '안녕하세요';
console.log(msg);

var msg = '안녕히 가세요';
console.log(msg);

var msg;  // 초기화가 되지 않은 변수는 무시됨
console.log(msg);

// 2. 함수 레벨 스코프. 함수의 중괄호만 지역으로 인식.
var i = 0;
for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('결과값으로 나온 i값: ', i);

// 3. 변수 호이스팅
console.log(test);
test = '반갑습니다.';
console.log(test);
var test;