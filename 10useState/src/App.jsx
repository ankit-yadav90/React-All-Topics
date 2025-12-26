import React, { useState } from "react";
import Counter from "./Counter";
import Objectprac from "./compnent/Objectprac";

const App = () => {
  const [first, setfirst] = useState(10);
  const [user, setuser] = useState("Ankit");
  function clickd() {
    setfirst(20);
    setuser("Yadav");
  }
  return (
    <>
      <div className="app">
        <h1>
          Value of num is {first} <br /> Value of num is {user}
        </h1>
        <button onClick={clickd}>click me</button>
      </div>
      <Counter></Counter>
      <Objectprac></Objectprac>
    </>
  );
};

export default App;
