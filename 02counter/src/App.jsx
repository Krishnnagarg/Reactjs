import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15);

  let addValue = () => {
    console.log("Clicked :" , counter);
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }

  let removeValue = () => {
    console.log("clicked :" , counter);
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : </h2>
    <button onClick={addValue}>Add Value:{counter}  </button>
    <br />
    <button onClick={removeValue}>RemoveValue :{counter}</button>
    <br />
    <button onClick={() => setCounter(0)}>Reset Value </button>

    </>
  )
}

export default App
