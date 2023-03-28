const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    
    // padStart(2, "0"): 문자를 무조건 두자리수로 설정한 뒤 빈 곳은 0으로 채우기
    // String으로 감싸서 숫자 --> 문자열
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    // clock에 텍스트형태로 데이터 값 집어넣기
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// setInterval(실행하고 싶은 함수, 몇 초 간격) 5000ms --> 5초
// web site가 load되자마자 getClock()을 실행하고 매초마다 실행되도록
getClock();
setInterval(getClock, 1000);