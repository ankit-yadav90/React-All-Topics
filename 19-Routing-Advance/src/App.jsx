import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Course from "./pages/Course";
import Coursedatil from "./pages/Coursedatil";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseid" element={<Coursedatil />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
