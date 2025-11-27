import React from "react";
import Card from "./component/card";
import "./index.css";

const App = () => {
  return (
    <>
      <Card
        user="Ankit Yadav"
        age="22"
        img="https://plus.unsplash.com/premium_photo-1664471482664-bd553e4d0d84?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Aman yadav"
        age={20}
        img="https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
};

export default App;
