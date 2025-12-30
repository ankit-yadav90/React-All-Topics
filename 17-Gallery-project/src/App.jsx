import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=60"
    );
    setUserData(response.data);
    console.log(response.data);
  };

  let PrintUserData = "No user data found..";

  if (userData.length > 0) {
    PrintUserData = userData.map(function (elem, idx) {
      return (
        <div className="ml-3" key={idx}>
          <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
              alt=""
            />
          </div>
          <h2 className="font-bold text-lg">{elem.author}</h2>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto p-4 h-screen text-white">
      <button
        onClick={getData}
        className="bg-green-600 active:scale-95 rounded px-5 py-2  text-white "
      >
        Get data
      </button>
      <div className="flex flex-wrap gap-4">{PrintUserData}</div>
    </div>
  );
};

export default App;
