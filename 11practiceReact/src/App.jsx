import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let fruits = ["apple", "banana", "grapes", "mango", "orange"];

  // return (
  //   <ul>
  //     {fruits.map((fruit,index) => (
  //       <li key={index}>{fruit}</li>
  //     ))}
  //   </ul>
  // )

  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 30) {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Initial Value : {counter}</h1>
      <button onClick={addValue}>Add Value :{counter}</button>
      <br />
      <button onClick={subValue}>remove Value :{counter}</button>
      <br />
    </>
  );
}

export default App;
