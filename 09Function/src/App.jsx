import React from "react";
import Scroling from "./component/Scroling";

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
      <Scroling></Scroling>
    </div>
  );
};

export default App;
