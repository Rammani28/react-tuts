import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15); //counter is variable 15, and setCouter is a method's name or reference

  const addValue = () => {
    // console.log("clicked", counter)
    counter += 1; // cannot update the ui like this only now, but variable can be updated in code though not in ui
    counter = counter > 20 ? 20 : counter;
    setCounter(counter);
  };

  const decreaseValue = () => {
    counter -= 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter); // update in the UI
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
