import React, { createContext } from "react";
import App from "../App";

export const ThemeDataContext = createContext();

const Themecontext = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value="Ankit">
        <App />
      </ThemeDataContext.Provider>
    </div>
  );
};

export default Themecontext;
