import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="bg-amber-500 m-5 font-extrabold rounded active:scale-95 cursor-pointer"
      >
        Go Home
      </button>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
