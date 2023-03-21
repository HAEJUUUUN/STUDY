// 1. 중복 선언 방지
let msg = '안녕하세요';
// let msg = '안녕히 가세요';

// 2. 함수 레벨 스코프와 블록 레벨 스코프 모두 인정
let i = 0;
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('최종적으로 나온 i값: ', i);  // 반복문 위에 선언한 전역 i

// 3. 변수 호이스팅 방지
console.log(x);
let x;  // error