import React from "react";

const App = () => {
  const formhandel = (e) => {
    e.preventDefault();
    console.log("sumbited");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formhandel(e);
        }}
      >
        <input type="text" placeholder="Enter the valu.." />
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default App;
