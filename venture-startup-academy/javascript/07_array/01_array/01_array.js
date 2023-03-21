const arr = ['바나나', '복숭아', '키위'];

// 1. 리터럴 배열로 배열 생성
console.log(arr[1]);  // 인덱스가 가리키는 위치의 값
console.log(arr.length);  // 배열의 길이

// 2. 생성자 함수로 배열 생성
const arr2 = Array();  // 빈 배열
console.log(arr2);

const arr3 = Array(1, 2, 3);
console.log(arr3);

const arr4 = ['봄', '여름', '가을', '겨울'];
for(let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
console.log(typeof arr4);  // object

// 다양한 자료형도 저장 가능하다.
const arr5 = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {name: '객체'},
    function(){}
];

console.log(arr5[8].name);  // 객체
