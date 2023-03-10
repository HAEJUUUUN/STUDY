import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onCLick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect에는 component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어준다.
  // const iRunOnlyOnce = () => {console.log("i run all only once");};
  useEffect(() => {
    console.log("i run only one");
  }, []);

  // keyword가 변화할 때만 코드를 실행할 거라고 react에게 알려줌
  // [] 안에 적어줌
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  useEffect(() => {
      console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.."></input>
      <h1>{counter}</h1>
      <button onClick={onCLick}>Click me</button>
    </div>
  );
}

export default App;
