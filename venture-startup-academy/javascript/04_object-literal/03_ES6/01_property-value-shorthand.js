var id = 'p-0001';
var price = 30000;

var product = {
    id: id,
    price: price  // 오른쪽이 선언한 변수
};
console.log(product);

// 프로퍼티 값 단축구문 - 변수를 활용해 리터럴 객체를 쉽게 만들기
var product2 = {id, price};
console.log(product2);