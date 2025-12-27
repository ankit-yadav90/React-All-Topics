import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState("");
  const formhandel = (e) => {
    e.preventDefault();
    console.log("Form sumbited by", first);
    setfirst("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formhandel(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter the valu.."
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default App;
