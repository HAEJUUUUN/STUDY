/* 배열 고차 함수 */
/* 고차 함수 : 함수를 인수로 전달 받거나 함수를 반환하는 함수 */

/* Array.prototype.forEach : for를 대체할 수 있는 고차함수 */

/* 참고
함수형 프로그래밍 : 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여
복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
for문은 반복을 위한 변수 선언, 조건식, 증감식 등이 필요하여 함수형 프로그램이 추구하는 바와 맞지 않음
forEach 메서드는 for를 대체할 수 있는 고차함수 */
numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, array){
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});

numbers.forEach(item => console.log(item * 10)); // 각 요소 별로 * 10 한 값을 콘솔에 출력

/* Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성 된 새로운 배열 반환 */
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);            // boolean,number,string

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`lengths : ${lengths}`);        // 5,6,3,3,3

/* Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값이 true인 요소로만 구성 된 새로운 배열 반환 */
const odds = numbers.filter(item => item % 2);
console.log(odds);       // [ 1, 3, 5 ]