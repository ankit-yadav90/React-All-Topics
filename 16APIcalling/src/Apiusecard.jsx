import React, { useState } from "react";
import axios from "axios";

const Apiusecard = () => {
  const [data, setdata] = useState([]);
  const getData3 = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data);
  };
  return (
    <div>
      <button onClick={getData3}>click3</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3 key={idx}>
              Hello,{elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Apiusecard;
