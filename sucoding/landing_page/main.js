let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];

// stringArr의 배열의 문자열 중 랜덤한 문자열을 하나 선택해 변수에 할당받을 수 있게끔 처리
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}


// 한 글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

// console.log(selectString);
// console.log(selectStringArr);

// 커서가 깜빡임 효과
function blink() {
    target.classList.toggle("active");
}
// 반복함수 이용. blink()를 0.5초 마다 실행
setInterval(blink, 500);