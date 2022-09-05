// 포기하지 말기

// 함수 선언

function doSomething(add) {
    console.log(add);
    const result = add(2,3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
// 함수를 선언만 하고 호출하지 않으면 당연히 아무런 일도 일어나지 않음
doSomething(add); 





