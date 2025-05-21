import React from "react";
import { Link } from "react-router";

const HobbyCard = ({ hobby }) => {

  return (
     <div className="card  bg-base-100 w-full h-96 shadow-xl">
      <figure>
        <img className="w-full object-cover p-2 " src={hobby.image} alt="Movie" />
      </figure>
      <div className=" p-5  text-center">
        <div className="flex flex-col justify-center text-center">
          <h2 className="card-title text-center flex justify-center">{hobby.name}</h2>
          <p>{hobby.description}</p>
          <p>{hobby.members}</p>
           <Link to={`/hobbyDetails/${hobby._id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
        <div className="card-actions flex flex-col">
         
         

        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
