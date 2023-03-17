// 01. object

var student = {
    name: '유관순',
    age: 16,
    getInfo: function() {
        /* this는 함수를 호출한 student를 가리킴.
        this를 붙이지 않으면 특히 name이 student의 name key를 가리키지 않게됨 */
        return `${this.name}은(는) ${this.age}세 입니다.`;  
    },
};

console.log(student);
console.log(typeof student);

console.log(student.name);  // 유관순
student.name = '강감찬';
console.log(student.name);  // 강감찬

console.log(student.getInfo());
