/*
    AND (그리고) &&            OR (또는) ||
    T && T => T                T || T => T
    T && F => F                T || F => T
    F && T => F                F || T => T
    F && F => F                F || F => F
*/

// 01. logical operator
// short circuit evaluation (단축 평가 구문)
// ||(OR)일 경우는 좌항이 false일 때 오른쪽 값이 남게 한다.
console.log(false || true);
console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('apple' || true);

/*
    if('apple' || 'banana'){  // apple이 남지만 truthy한 값이라 true로 고려되어 조건문이 실행됨
        console.log('조건식이 맞을까?');
    }
*/

// == console.log('apple' || 'banana');

// &&(AND)일 경우는
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);

if(num % 2 == 0){
    console.log('짝수입니다.');
}
else{
    console.log('홀수입니다.');
}

num % 2 == 0 && console.log('짝수입니다.');
num % 2 == 0 || console.log('홀수입니다.');  // == false || console.log('홀수입니다.');