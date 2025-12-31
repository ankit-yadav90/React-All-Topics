import React from "react";
import axios from "axios";

const Axios = () => {
  const getData2 = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(data);
  };
  return (
    <div>
      <button onClick={getData2}>click2</button>
    </div>
  );
};

export default Axios;
