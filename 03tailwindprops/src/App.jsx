import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind Css</h1>
      <div className="flex gap-4">
        <Card name="Ram" btnText="visit me" descriptionText="Hi I am Ram, How do you do?" />
        <Card name="sam" btnText="click me" />
        <Card name="hari" descriptionText="Hi Iam Sam."/>
        <Card descriptionText="So you can call me Anything"/>
      </div>
    </>
  );
}

export default App;
