import React from "react";
import Axios from "./Axios";
import Apiusecard from "./Apiusecard";

const App = () => {
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <button onClick={getData}>click</button>
      <Axios></Axios>
      <Apiusecard></Apiusecard>
    </div>
  );
};

export default App;
