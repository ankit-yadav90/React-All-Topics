import React from "react";
import RightCardContent from "./RightCardContent";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 flex overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
};

export default Rightcard;
