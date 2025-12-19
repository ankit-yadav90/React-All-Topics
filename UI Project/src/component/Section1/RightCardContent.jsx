import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const RightCardContent = () => {
  return (
    <div className="absolut top-0 left-0 h-full w-full bg-amber-300 p-8 flex flex-col justify-between">
      <h2 className="bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center">
        1
      </h2>
      <div>
        <p className="text-xl leading-normal text-white nb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quia
          est mollitia quisquam! Corrupti, velit!
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
            Satisfied
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            <i>
              <FaArrowRight />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
