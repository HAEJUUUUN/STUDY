// document.getElementById('id값'); >> id를 이용한 요소 노드 취득

// document.getElementById("lion").style.color = "red"; //lion 글씨색 빨강으로
// document.getElementById("tiger").style.color = "green";
// document.getElementById("bear").style.color = "blue"; 


// document.getElementsByTagName('태그 이름');
// >> 인수에 들어있는 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환 (HTMLCollection 객체 반환)

// const animal = document.getElementsByTagName("li")[0].style.color = "red";  // lion 글씨색 빨강으로

// document.getElementsByClassName('class 값'); 
// 인수로 전달한 클래스 값을 갖는 모든 요소 노드들을 탐색하여 반환
// document.getElementsByClassName("animal")[1].style.color = "red";  // tiger 글씨색 빨강으로

// document.querySelectorAll(".animal")[2].innerHTML = "dog";  // bear을 dog로 변환
// const animals = document.getElementById("animals");

// animals.innerHTML += "<li class = 'animal'>Cat</li>"  // Cat을 animals 리스트에 자동으로 추가

// document.querySelectorAll(".box")[0].classList.add("purple");  // class 추가
// document.querySelectorAll(".box")[0].classList.remove("purple");  // class 제거
// document.querySelectorAll(".box")[0].classList.toggle(yellow);  // yellow 클래스 추가
// document.querySelectorAll(".box")[0].classList.toggle(yellow);  // 한 번 더 코글하면 제거

// document.getElementById("btn").addEventListener("click", function(){  // 버튼 클릭하면 문구뜨게
//    console.log("click!!!!"); });

// var num = 0;
// document.getElementById('plus').addEventListener("click",function(){
//    num++;  // 클릭하면 숫자 1씩 커지도록
//    document.getElementById("num").innerHTML = num; });

//document.querySelector(".bar").addEventListener("click", function(){
//    document.querySelector(".newBar").style.display ="block"; })  // 바 클릭시 새로운 바 생성

//document.querySelector(".bar").addEventListener("click", function(){
//    document.querySelector(".newBar").classList.toggle ="show"; })  // 바 클릭시 생성 or 없어짐 (토글 기능)

//document.querySelector(".bar").addEventListener("click", function(){
//  document.querySelector(".bar").innerHTML = "눌렸어!";  // 바 문구 변환

//    document.querySelector(".newBar").classList.toggle ="show"; })  // 바 클릭시 생성 or 없어짐 (토글 기능)


