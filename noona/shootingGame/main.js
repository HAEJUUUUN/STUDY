// 캔버스 세팅

let canvas;
let ctx;

canvas = document.createElement("canvas");
// 2d를 ctx에 가져오기
ctx = canvas.getContext("2d");

// 캔버스 사이즈 정하기
canvas.width = 400;
canvas.height = 700;

// canvas를 html의 body에 넣어주기
document.body.appendChild(canvas);

// 변수세팅
let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameoverImage;

// 우주선 좌표
let spaceshipX = canvas.width/2-32;
let spaceshipY = canvas.height-64;
// 이미지 가져오는 함수
function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/background.png";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";

    bulletImage = new Image();
    bulletImage.src = "imges/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "image/enemy.png";

    gameoverImage = new Image();
    gameoverImage.src = "image/gameover.png";
}

let keysDown = {};
function setupKeYboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;

    });
    document.addEventListener("keyup",function(event){
        delete keysDown[event.keyCode];
    });
}

function update(){
    if(39 in keysDown){
        spaceshipX += 5; // 우주선 속도 조절
    } // 오른쪽 클릭
    if(37 in keysDown){
        spaceshipX -= 5;
    } // 왼쪽 클릭

    if(spaceshipX <= 0) {
        spaceshipX = 0;
    }
    if(spaceshipX >= canvas.width-57) {
        spaceshipX = canvas.width-57;
    }
    // 우주선의 좌표값이 무한대로 업데이트 되는 게 아니라 경기장 안에서만 있게 하기

}


// 이미지 보여주는 함수
function render() {
    //drawImage(image, dx, dy, dWidth, dHeight)
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main(){
    update(); // 좌표 값 업데이트
    render();
    // main을 계속 호출해서 background에 기속적으로 나타날 수 있도록
    requestAnimationFrame(main);
}

loadImage();
setupKeYboardListener();
main();