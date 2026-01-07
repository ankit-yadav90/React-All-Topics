import React, { useState } from "react";
import Navbar from "./component/navbar";

const App = () => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <Navbar theme={theme} />
    </div>
  );
};

export default App;
