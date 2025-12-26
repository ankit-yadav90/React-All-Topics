import React, { useState } from "react";

const Objectprac = () => {
  const [num, setnum] = useState([10, 20, 30, 40]);
  const arr = () => {
    const newnum = [...num];
    newnum.push(99);
    setnum(newnum);
  };
  return (
    <div className="obj">
      <h1>aray is this{num}</h1>
      <button onClick={arr}>click</button>
    </div>
  );
};

export default Objectprac;
