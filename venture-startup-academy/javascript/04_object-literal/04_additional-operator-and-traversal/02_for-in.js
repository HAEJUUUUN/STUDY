// for in 반복문
// 객체의 모든 프로퍼티 키 순회
var coffee = {
    name: 'top',
    capacity: 150,
    price: 2500,
    awake() {
        console.log('이 커피는 그냥 커피가 아닌 top야! 잠깨!')
    }
};

for(var key in coffee) {  /* coffee라는 객체의 프로퍼티 키를 하나씩 꺼내서  in 연산자 왼쪽의 변수에 담는다.
                          (객체가 가진 프로퍼티 갯수만큼 반복해서) */
    console.log(`key: ${key}`);
    console.log(`coffee[${key}]: ${coffee[key]}`);

    if('function' == typeof coffee[key]) {
        coffee[key]();
    }
}