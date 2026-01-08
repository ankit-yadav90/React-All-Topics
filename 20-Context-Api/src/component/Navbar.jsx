import React, { useContext, useState } from "react";
import Navbar2 from "./navbar2";
import { ThemeDataContext } from "./Themecontext";

const Navbar = (props) => {
  const data = useContext(ThemeDataContext);
  console.log(data);

  return (
    <div className="nav">
      <h1>Shyrinshe {data}</h1>
      <Navbar2 theme={props.theme}>
        <h1>sidebar</h1>
        <h1>footer</h1>
      </Navbar2>
    </div>
  );
};

export default Navbar;
