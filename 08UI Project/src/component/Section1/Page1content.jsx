import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = (props) => {
  console.log(props);

  return (
    <div className="pb-16 pt-6 flex h-[90vh] items-center gap-10 bg-amber-95 px-18">
      <Leftcontent />
      <Rightcontent user={props.user} />
    </div>
  );
};

export default Page1content;
