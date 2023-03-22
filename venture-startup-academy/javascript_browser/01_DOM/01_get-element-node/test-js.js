let num = 1;

// $표시는 개발자들 사이에서 html 요소가 담겨있다는 암묵적 표시
// id 중복이 있다면 맨 처음 id의 요소만 가져옴. 그렇기 때문에 id 중복설정은 피해야함
// getElementById : 요소의 id 어트리뷰트로 선택해서 가져온 다음 반환하는 함수
const $ele = document.getElementById('area1');
console.log($ele);

// property 사용
// 요소 객체의 style property에 접근해서 css와 관련된 property 값을 수정하면 css가 수정됨
$ele.style.backgroundColor = 'skyblue';
        
// css에서 알고 있는 속성명을 그대로 쓰고 싶으면 대괄호에 ''(싱글 쿼테이션) 씌워야 한다
$ele.style['background-color'] = 'purple';
const $ele2 = document.getElementById('area2');
$ele2.style.border = '3px solid red';