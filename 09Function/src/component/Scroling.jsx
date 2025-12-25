import React from "react";

const Scroling = () => {
  const scrol = (elem) => {
    if (elem > 0) {
      console.log("sidh scrloing", elem);
    } else {
      console.log("ulta scroling");
    }
  };
  return (
    <div
      onWheel={(elem) => {
        scrol(elem.deltaY);
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default Scroling;
