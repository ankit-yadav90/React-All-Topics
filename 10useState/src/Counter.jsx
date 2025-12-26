import React, { useState } from "react";

const Counter = () => {
  const [first, setfirst] = useState(0);

  function increse() {
    setfirst(first + 1);
  }
  function decrese() {
    setfirst(first - 1);
  }
  return (
    <div className="count">
      <h1>{first}</h1>
      <button onClick={increse}>increes</button>
      <button onClick={decrese}>decrees</button>
    </div>
  );
};

export default Counter;
