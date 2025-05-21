import React from "react";
import { Link } from "react-router";

const HobbyCard = ({ hobby }) => {

  return (
     <div className="card  bg-base-100 w-full shadow-sm border">
      <figure>
        <img className="w-[200px]" src={hobby.image} alt="Movie" />
      </figure>
      <div className=" flex justify-between">
        <div className="flex flex-col justify-start">
          <h2 className="card-title">{hobby.name}</h2>
          <p>{hobby.description}</p>
          <p>{hobby.members}</p>
        </div>
        <div className="card-actions flex flex-col">
          <Link to={`/hobbyDetails/${hobby._id}`}><button className="btn btn-primary">Details</button></Link>
         

        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
