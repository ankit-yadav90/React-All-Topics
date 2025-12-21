import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

const Section1 = (props) => {
  return (
    <div className="h-screen width-full">
      <Navbar></Navbar>
      <Page1content user={props.user} />
    </div>
  );
};

export default Section1;
