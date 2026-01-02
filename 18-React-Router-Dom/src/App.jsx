import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Navebar from "./Navebar";

const App = () => {
  return (
    <div>
      <Navebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </div>
  );
};

export default App;
