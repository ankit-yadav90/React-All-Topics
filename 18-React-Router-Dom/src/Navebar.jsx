import React from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <div className="nav">
      <h2>Ankit Yadav</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contect">Contect</Link>
      </div>
    </div>
  );
};

export default Navebar;
