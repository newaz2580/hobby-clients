import React from "react";

const HobbyCard = ({ hobby }) => {
  console.log(hobby);
  return (
     <div className="card  bg-base-100 w-full shadow-sm border">
      <figure>
        <img className="w-[200px]" src={hobby.image} alt="Movie" />
      </figure>
      <div className=" flex justify-between">
        <div className="flex flex-col justify-start">
          <h2 className="card-title">{hobby.name}</h2>
          <p>{hobby.descripton}</p>
          <p>{hobby.members}</p>
        </div>
        <div className="card-actions flex flex-col">
          <button className="btn btn-primary">Watch</button>
         

        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
