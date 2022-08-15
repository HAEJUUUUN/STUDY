// 가로 메뉴

let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

horizontalMenus.forEach(menu=>menu.addEventListener("click",(e)=>horizontalIndicator(e.currentTarget)));

function horizontalIndicator(e){
    horizontalUnderLine.style.left = e.offsetLeft + "px";
    horizontalUnderLine.style.width = e.offsetWidth + "px";
    horizontalUnderLine.style.top = e.offsetTop + e.offsetHeight + "px";
}

// 세로 메뉴

let verticalUnderLine = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

verticalMenus.forEach(menu=>menu.addEventListener("click",(e)=>verticalIndicator(e.currentTarget)));

function verticalIndicator(e){
    verticalUnderLine.style.left = e.offsetLeft + "px";
    verticalUnderLine.style.width = e.offsetWidth + "px";
    verticalUnderLine.style.top = e.offsetTop + e.offsetHeight + "px";
}