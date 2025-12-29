import React from "react";

const App = () => {
  localStorage.setItem("name", "Ankit");

  //Object add from local Storage
  const user = { name: "Ankit", age: "23" };
  localStorage.setItem("user", JSON.stringify(user));

  //console per dikhane ke liy
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return <div>app</div>;
};

export default App;
