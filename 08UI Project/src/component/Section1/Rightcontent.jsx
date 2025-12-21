import React from "react";
import Rightcard from "./Rightcard";

const Rightcontent = (props) => {
  console.log(props);

  return (
    <div
      id="right"
      className="h-full flex overflow-x-auto flex-nowrap gap-4 p-6 w-2/3 "
    >
      {props.user.map(function (elem, idx) {
        return (
          <Rightcard
            key={idx}
            id={idx}
            img={elem.img}
            color={elem.color}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default Rightcontent;
