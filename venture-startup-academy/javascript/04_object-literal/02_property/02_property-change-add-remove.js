var dog = {
    name: '뽀삐',

};

// 1. 프로퍼티 값 수정
console.log(dog.name);
dog.name = '해피';
console.log(dog.name);

// 2. 프로퍼티 동적 추가
dog.age = 3;
console.log(dog.age);

// 3. 프로퍼티 동적 삭제
console.log(dog);
delete dog.age;
console.log(dog);
delete dog.eat;  // 아무런 에러없이 무시된다.