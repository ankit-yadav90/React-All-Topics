import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  11;
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  function Astate() {
    console.log("A ki value change ho gei...");
  }
  function Bstate() {
    console.log("B ki valu change ho gei...");
  }
  useEffect(
    function () {
      Astate();
      console.log("useEffect is running ...");
    },
    [A]
  );

  useEffect(
    function () {
      Bstate();
      console.log("useEffect is running ...");
    },
    [A]
  );

  return (
    <div>
      <h1>num is{A}</h1>
      <h1>num is {B}</h1>
      <button
        onClick={() => {
          setA(A + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setB(B - 1);
        }}
      >
        B
      </button>
    </div>
  );
};

export default App;
