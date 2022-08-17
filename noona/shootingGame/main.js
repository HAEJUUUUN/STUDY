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

let bulletList = [];  // 총알들을 저장하는 리스트
function Bullet() {
    this.x = 0;
    this.y = 0;
    this.init = function() {
        this.x = spaceshipX+20;
        this.y = spaceshipY;

        bulletList.push(this);
    };
    this.update = function(){
        this.y -= 7;
    };
}

// 이미지 가져오는 함수
function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/background.png";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";

    gameoverImage = new Image();
    gameoverImage.src = "images/gameover.png";
}

let keysDown = {};
function setupKeYboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;

    });
    document.addEventListener("keyup",function(event){
        delete keysDown[event.keyCode];

        if(event.keyCode == 32) {
            createBullet();  // 총알 생성 함수
        }
    });
}

function createBullet() {
    console.log("총알생성");
    let b = new Bullet();
    b.init();
    console.log("새로운 총알 리스트", bulletList);
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


    // 총알의 y좌표 업데이트하는 함수 호출
    for(let i=0; i<bulletList.length; i++){
        bulletList[i].update();
    }
}


// 이미지 보여주는 함수
function render() {
    //drawImage(image, dx, dy, dWidth, dHeight)
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);

    for(let i=0; i<bulletList.length; i++){
        ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    }
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

// 방향키를 누르면 우주선의 xy좌표가 바뀌고 다시 render를 그려줌

// 총알만들기
// 1. 스페이스를 누르면 총알 발사
// 2. 총알이 발사 = 총알의 y값이 -- , 총알의 x값은? 스페이스를 누른 순간의 우주선의 x좌표
// 3. 발사된 총알들은 총알 배열에 저장함.
// 4. 총알들은 x,y 좌표값이 있어야 함.
// 5. 총알 배열을 가지고 render를 그려줌.
