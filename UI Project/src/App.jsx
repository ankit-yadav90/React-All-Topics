import React from "react";
import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/section2";

const App = () => {
  const user = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "green",
      tag: "Sttisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "orange",
      tag: "Underseved",
    },
    {
      img: "https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "red",
      tag: "UnderBanked",
    },
  ];
  return (
    <div>
      <Section1 user={user} />
      <Section2 />
    </div>
  );
};

export default App;
