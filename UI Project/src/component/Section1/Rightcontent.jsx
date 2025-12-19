import React from "react";
import Rightcard from "./Rightcard";

const Rightcontent = () => {
  return (
    <div className="h-full flex gap-4 p-6 w-2/3 ">
      <Rightcard />
      <Rightcard />
      <Rightcard />
    </div>
  );
};

export default Rightcontent;
