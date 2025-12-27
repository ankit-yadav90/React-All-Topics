import React from "react";

const App = () => {
  const Sumbithandler = (e) => {
    e.preventDefault();
    console.log("sumbited");
  };
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          Sumbithandler(e);
        }}
        className="flex gap4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-3xl mb-4 font-bold">add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Handing"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
        />
        <textarea
          type="text"
          className="px-5 w-full mt-5 font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          placeholder="write Details"
        ></textarea>
        <button className="bg-white mt-5 font-medium w-full outline-none text-black px-5 py-2 rounded">
          add Note
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
