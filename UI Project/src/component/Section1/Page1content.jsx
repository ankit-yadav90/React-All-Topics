import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = () => {
  return (
    <div className="py-10 flex h-[90vh] items-center gap-10 bg-amber-95 px-18">
      <Leftcontent />
      <Rightcontent />
    </div>
  );
};

export default Page1content;
