var num = 13;
var str = '자바스크립트 재밌다';
var tORf = true;
var undef;
var objMe = {
    name: '노소희',
    age: 24,
    tired: true,
    dept: 'computer engineering',
    study: function() {
        console.log('js 공부');
    }
};
var symb = Symbol('key');
var Null = 'string';
Null = null;

console.log("출력결과:", typeof num);
console.log("출력결과: " + typeof str);
console.log(`출력결과: ${typeof tORf}`);
console.log("출력결과:", typeof undef);
console.log("출력결과: " + typeof objMe);
console.log(`출력결과: ${typeof symb}`);
console.log("출력결과:", Null);

