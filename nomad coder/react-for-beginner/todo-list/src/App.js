import { useState } from "react";

function App() {
  const divStyle = {
    margin: "10px"
  }
  const btnStyle = {
    color: "white",
    margin: "5px",
    background: "tomato",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
  };
  const [toDo, setToDo] = useState("");
  // 여러 개의 toDo를 받을 수 있는 배열
  const [toDos, setToDos] = useState([]);  // 기본값은 비어있는 배열
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    
    // form이 submit 이벤트를 가지므로 evernt.preventDefault() 함수를 이용해 기본 동작 막기.
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    // state는 직접적으로 수정 불가능하기 때문에 toDos 배열을 수정하고 싶다면 수정하는 함수를 써야함.
    // setToDos를 통해 현재의 배열 toDos(지금까지 넣은 엘리먼트 포함된 array)를 가져와 toDo를 추가.
    setToDos((currentArray) => [toDo, ...currentArray]);  //  ...을 사용해 currentArray 배열에 toDo를 추가시킴.
    setToDo("");
  };
  const deleteBtn = index => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    };
  return (
    <div style={divStyle}>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button style={btnStyle}>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}<button style={btnStyle} onClick={() => deleteBtn(index)}>X</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;