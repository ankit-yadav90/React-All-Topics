import React from "react";

const App = () => {
  // function btn(val) {
  //   console.log(val);
  // }
  return (
    <div>
      <input
        onChange={function (elem) {
          console.log(elem.target.value);
        }}
        type="text"
      />
    </div>
  );
};

export default App;
