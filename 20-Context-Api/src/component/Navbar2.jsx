import React from "react";

const Navbar2 = (props) => {
  return (
    <div className="nav2">
      <h3>Home</h3>
      <h3>Product</h3>
      <h3>Context</h3>
      <h3>Services</h3>
      <h3>{props.theme}</h3>
    </div>
  );
};

export default Navbar2;
