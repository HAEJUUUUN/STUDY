const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    // toDos array의 내용을 localStorage에 넣기
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} 

function deleteToDo(event) {
    /* ❌버튼 클릭 시 event를 얻고 해당 event는 target을 준다 
    -> 여기서 target은 button이며 그 button은 li라는 부모를 가진다
    -> parentElement를 통해 해당 button의 부모요소에 접근한다
    */
    const li = event.target.parentElement;
    // 부모 요소 제거
    li.remove();
    /* toDo는 toDos DB에 있는 요소 중 하나. 
    클릭한 ❌버튼 li.id와 다른 toDo는 남겨두도록 그래서 ❌버튼이 클릭된 목록을 지우도록 */    
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();

}

function paintToDo(newTodo) {
    // li element 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    // button 텍스트 변경
    button.innerText = "❌";
    // ❌button클릭시 deleteToDo 함수 작동
    button.addEventListener("click", deleteToDo)
    // li태그안에 span태그 넣어줌
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // newToDo: input의 value를 비우기 전의 값을 나타내는 string
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // object로 저장
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };    
    toDos.push(newToDoObj);
    // newTodo를 paintToDo에 넣어서 호출 --> newToDoObj object를 넣는 것으로 바뀜
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    /* JSON.parse()로 string data type을 object로 바꿈 
    이 Object는 Array 형태로 바뀜. 
    즉 index를 통해 value를 access 할 수 있게됨 */
    const parsedToDos = JSON.parse(savedToDos);
    /* localStorage에 toDo 데이터 값들이 있을 시 toDos에 parsedToDos를 넣어 과거의 toDo들을 복원
    이 과정이 없을시 toDos는 빈 array로 시작하기 때문에 localStorage에서 과거의 toDo가 사라지고 새로 작성하는 toDo만 추가됨*/
    toDos = parsedToDos;
    // forEach --> array의 각 item에 대해 function을 실행하게 한다
    parsedToDos.forEach(paintToDo);
}

