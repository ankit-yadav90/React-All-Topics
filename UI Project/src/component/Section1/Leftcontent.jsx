import React from "react";
import { ArrowUpRight } from "lucide-react";

const Leftcontent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 bg-blue-200 ">
      <div className="p-6">
        <h3 className="mb-7 text-5xl font-bold">
          Prospective <br /> <span>Customar</span> <br /> Segmentation
        </h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis
          facilis commodi est quisquam esse laudantium! Nesciunt vero iste.
          Vero.
        </p>
      </div>
      <div className="text-8xl">
        <ArrowUpRight />
      </div>
    </div>
  );
};

export default Leftcontent;
