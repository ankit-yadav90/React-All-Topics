import React, { createContext } from "react";

export const ThemeDataContext = createContext();

const Themecontext = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value="Ankit">
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default Themecontext;
