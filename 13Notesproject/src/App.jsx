import React, { useState } from "react";

const App = () => {
  const [tital, settital] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);
  const Sumbithandler = (e) => {
    e.preventDefault();

    const copytask = [...task];

    copytask.push({ tital, details });
    settask(copytask);
    console.log(copytask);

    settital("");
    setdetails("");
  };
  const deleteNote = (index) => {
    const copytask = [...task];
    copytask.splice(index, 1);
    settask(copytask);
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
        {/* pehla input */}
        <input
          type="text"
          placeholder="Enter Notes Handing"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={tital}
          onChange={(e) => {
            settital(e.target.value);
          }}
        />
        {/* Dusra input */}
        <textarea
          type="text"
          className="px-5 w-full mt-5 font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          placeholder="write Details"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white active:scale-95 mt-5 font-medium w-full outline-none text-black px-5 py-2 rounded">
          add Note
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex items-start justify-start flex-wrap gap-5  h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start h-52 w-40 rounded-2xl text-black py-9 px-4 bg-cover bg-[url('https://th.bing.com/th/id/R.8bf74e3fa932e13606f5d63f8e79257d?rik=RJLmnfEBSTy4sA&riu=http%3a%2f%2fimages.all-free-download.com%2fimages%2fgraphiclarge%2fnote_pad_clip_art_25802.jpg&ehk=G829jXpz3etSysVTj%2be7%2fUS9kEGnM7aSEpgzXgce8l8%3d&risl=&pid=ImgRaw&r=0')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.tital}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => deleteNote(idx)}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 mt-9 text-xs rounded font-bold text rhite"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
