import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let PrintUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    PrintUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}></Card>;
        </div>
      );
    });
  }
  1;

  return (
    <div className="bg-black pt-10 overflow-auto p-4 h-screen text-white">
      <div className="flex flex-wrap gap-4">{PrintUserData}</div>
      <div className="flex h-[82] gap-6 justify-center p-4">
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className="bg-amber-400 h-12 text-sm cursor-pointer active:scale-95 text-black px-2 py-4 font-semibold rounded"
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setUserData([]);
            }
          }}
        >
          prev
        </button>
        <h4 className="mt-2">Page{index}</h4>
        <button
          className="bg-amber-400 h-12 text-sm cursor-pointer active:scale-95 text-black px-4 py-2 font-semibold rounded"
          onClick={() => {
            setUserData([]);
            setindex(index + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
