import React from "react";
import Card from "./component/card";
import { FaBookmark } from "react-icons/fa6";

const jobOpenings = [
  {
    brandLogo:
      "https://tse2.mm.bing.net/th/id/OIP.arezqGrVeKUAmuKTaXGGEgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google",
    datePosted: "5 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://tse4.mm.bing.net/th/id/OIP.3meF7mC6eHnDmied3AsDTwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    position: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://th.bing.com/th/id/R.f5dee355f4f20bdf069c95b7787f1525?rik=JVwomDZ2WeXJoQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Sf4sPT42qCA%2fUM4IxB3MzFI%2fAAAAAAAABlg%2f8GIO3ApcVQY%2fs1600%2fapple%2blogo%2bpng.png&ehk=rp84aXAhwqcAhrGIZ8pBqHQYbm85eFZWRxJ%2b6%2bRZLkA%3d&risl=&pid=ImgRaw&r=0",
    companyName: "Apple",
    datePosted: "10 days ago",
    position: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    position: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote",
  },
  {
    brandLogo:
      "https://tse2.mm.bing.net/th/id/OIP.Fh-MdQATxbvfRTxxo0MuGgHaEz?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    position: "Backend Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo:
      "https://tse3.mm.bing.net/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    position: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo:
      "https://tse4.mm.bing.net/th/id/OIP.VXuyrZvkfJCwb6keHCQCbwHaF7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Tesla",
    datePosted: "2 days ago",
    position: "Data Analyst",
    tag1: "Intern",
    tag2: "Entry Level",
    pay: "$25/hr",
    location: "Texas, USA",
  },
  {
    brandLogo:
      "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    datePosted: "1 week ago",
    position: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://cdn.1min30.com/wp-content/uploads/2018/04/Couleur-logo-IBM.jpg",
    companyName: "IBM",
    datePosted: "1 month ago",
    position: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/Afcrw4pqyrhg1PxYssdaPyytRj8c1uY1dWw8Vv0emV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvOS85Ni9JbnRl/bF9Db3JlXzIwMjBf/bG9nby5zdmcvcmV2/aXNpb24vbGF0ZXN0/L3NjYWxlLXRvLXdp/ZHRoLWRvd24vMjIw/P2NiPTIwMjIwNjIw/MjAwNDMz",
    companyName: "Intel",
    datePosted: "2 months ago",
    position: "QA Tester",
    tag1: "Intern",
    tag2: "Entry Level",
    pay: "$20/hr",
    location: "California, USA",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <h1>
            <Card
              company={elem.companyName}
              position={elem.position}
              brand={elem.brandLogo}
              datePosted={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              payPerHour={elem.pay}
              location={elem.location}
            />
          </h1>
        );
      })}
    </div>
  );
};

export default App;
