// = document.querySelector("#login-form"); querySelector는 모든 요소 검색이 가능하느라 id라는 것을 알 수 있는 #표시를 꼭 해야한다.
// const loginForm = document.getElementById("login-form");  
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    // onLoginBtnClick 실행시 loginInput의 value를 보여줌
    // console.dir(loginInput.value);
    // const username = loginInput.value;
    // console.log(username);  
    // 클릭시 username이 비어있으면
    /* 
    if(username === ""){
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long.");
    } 
    --> html input에서 설정 */ 
    // preventDefault: 기본동작이 실행 되는것을 막아줌
    event.preventDefault();    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// login btn에 대한 click 감지
//loginButton.addEventListener("click", onLoginBtnClick);

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;  //"Hello " + username
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // form을 submit할 때 입력값 받아내기
    loginForm.addEventListener("submit", onLoginSubmit);
} else {    
    paintGreetings(savedUsername);
}