import React from "react";
import { useParams } from "react-router-dom";

const Coursedatil = () => {
  const params = useParams();
  console.log(params.courseid);

  return (
    <div>
      <h1>{params.courseid}Course Datiles</h1>
    </div>
  );
};

export default Coursedatil;
