import { FaBookmark } from "react-icons/fa6";

const Card = (prop) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src={prop.brand} alt="" />{" "}
            <button>
              Save <FaBookmark size={12} />
            </button>
          </div>
          <div className="center">
            <h3>{prop.company} </h3> <span>{prop.datePosted}</span>
            <h2>{prop.position}</h2>
            <div className="tag">
              <h4>{prop.tag1}</h4>
              <h4>{prop.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{prop.payPerHour}</h3>
            <p>{prop.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
